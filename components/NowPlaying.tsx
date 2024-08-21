import { useEffect, useState } from 'react';
import Image from 'next/image';

import SpotifyLogo from '@/spotify/SpotifyLogo'
import PlayingAnimation from '@/spotify/PlayingAnimation';
import { LoadingSpinner } from './LoadingSpinner';

type NowPlayingResponse = {
    albumImageUrl: string,
    artist: string,
    isPlaying: string,
    songUrl: string,
    title: string,
    previewUrl: string,
    songUri: string
}

const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState<NowPlayingResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch('/api/now-playing');
                if (!response.ok) {
                    throw new Error('Failed to fetch now playing data');
                }
                const data = await response.json();
                setNowPlaying(data);
            } catch (error) {
                setError('Unable to fetch currently playing data.');
            }
        };

        fetchNowPlaying();
    }, []);

    if (error) {
        return null;
    }

    if (!nowPlaying) {
        return <div className='flex flex-col items-center justify-center space-y-1'>
             <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                <SpotifyLogo />
                <p className='text-xl font-bold dark:text-white text-'>Currently playing</p>
            </div>
            <LoadingSpinner/>
        </div>;
    }

    return (
        <div className='mx-4 my-2 space-y-2 '>
            <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                <SpotifyLogo />
                <p className='text-xl font-bold dark:text-white text-white'>Currently playing</p>
            </div>
            <div className='flex flex-row p-2.5 rounded-lg space-x-3 shadow-lg min-w-36' style={{ backgroundColor: '#121212', }}>
                <Image
                    src={nowPlaying.albumImageUrl}
                    alt={`${nowPlaying.title} album art`}
                    width={96}
                    height={96}
                    className='rounded'
                />
               <div>
                 <div className='flex flex-row items-center justify-start space-x-2'>
                     <PlayingAnimation />
                     <p className='font-bold text-lg overflow-clip text-white' style={{ minWidth: '100px', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{nowPlaying.title}</p>
                 </div>
                
                 <p className='text-gray-400 text-sm'>{nowPlaying.artist}</p>
               </div>

            </div>
        </div>
    );
};

export default NowPlaying;


// NowPlaying Component using oEmbed API...

// import { useEffect, useState } from 'react';

// const NowPlaying = () => {
//     const [embedHtml, setEmbedHtml] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchNowPlaying = async () => {
//             const response = await fetch('/api/now-playing');
//             const data = await response.json();
//             const { songUri } = data;

//             if (songUri) {
//                 const embedResponse = await fetch(`/api/embed?uri=${encodeURIComponent(songUri)}`);
//                 const embedData = await embedResponse.json();
//                 setEmbedHtml(embedData.html);
//             }
//         };

//         fetchNowPlaying();
//     }, []);

//     if (!embedHtml) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>Now Playing</h1>
//             <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
//         </div>
//     );
// };

// export default NowPlaying;