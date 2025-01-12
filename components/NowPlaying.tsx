import { useEffect, useState } from 'react';
import Image from 'next/image';

import SpotifyLogo from '@/spotify/SpotifyLogo'
import PlayingAnimation from '@/spotify/PlayingAnimation';
import defaultcoverart from '@/public/defaultcoverart.jpeg'
import { LoadingSpinner } from './LoadingSpinner';
import { Reveal } from './Reveal';
import type { RecentlyPlayedTrack } from '@/pages/api/recently-played';

// Base type only includes common properties
type BaseTrack = {
    artist: string,
    isPlaying: boolean,
    title: string,
    songUri: string
}

// Each specific type adds its own properties
type SpotifyTrack = BaseTrack & {
    is_local: false,
    albumImageUrl: string,
    albumUrl: string,
    artistUrl: string,
    songUrl: string,
    previewUrl: string
}

type LocalTrack = BaseTrack & {
    is_local: true,
    albumImageUrl: null,
    albumUrl: null,
    artistUrl: null,
    songUrl: null,
    previewUrl: null
}

type NowPlayingResponse = SpotifyTrack | LocalTrack;

function isSpotifyTrack(track: NowPlayingResponse): track is SpotifyTrack {
    return !track.is_local;
}

const SpotifyTrackView = ({ track }: { track: SpotifyTrack }) => (
    <div className='flex flex-row p-2.5 rounded-lg space-x-3 shadow-lg min-w-36 w-full xl:max-w-full'
        style={{ backgroundColor: '#121212' }}>
        <Image
            src={track.albumImageUrl}
            alt={`${track.title} album art`}
            width={96}
            height={96}
            className='rounded hover:opacity-60 transition duration-300 cursor-pointer'
            onClick={() => window.open(track.albumUrl, '_blank')}
        />
        <div className='flex-1 min-w-0'>
            <Reveal
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.5 } }}
            >
                <div className='flex flex-row items-center justify-start space-x-2'>
                    {track.isPlaying ? <PlayingAnimation /> : ''}
                    <div className='flex-1 min-w-0'>
                        <p className='font-bold text-lg text-white overflow-hidden text-ellipsis whitespace-nowrap w-52 sm:w-full hover:underline cursor-pointer'
                            onClick={() => window.open(track.songUrl, '_blank')}>
                            {track.title}
                        </p>
                    </div>
                </div>
            </Reveal>
            <Reveal
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } }}
            >
                <p className='text-gray-400 text-sm hover:underline cursor-pointer'
                    onClick={() => window.open(track.artistUrl, '_blank')}>
                    {track.artist}
                </p>
            </Reveal>
        </div>
    </div>
);

const LocalTrackView = ({ track }: { track: LocalTrack }) => (
    <div className='flex flex-row p-2.5 rounded-lg space-x-3 shadow-lg min-w-36 w-full xl:max-w-full'
        style={{ backgroundColor: '#121212' }}>
        <Image
            src={defaultcoverart}
            alt={`${track.title} album art`}
            width={96}
            height={96}
            className='rounded hover:opacity-60 transition duration-300'
        />
        <div className='flex-1 min-w-0'>
            <Reveal
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.5 } }}
            >
                <div className='flex flex-row items-center justify-start space-x-2'>
                    <PlayingAnimation />
                    <div className='flex-1 min-w-0'>
                        <p className='font-bold text-lg text-white overflow-hidden text-ellipsis whitespace-nowrap w-52 sm:w-full'>
                            {track.title}
                        </p>
                    </div>
                </div>
            </Reveal>
            <Reveal
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } }}
            >
                <p className='text-gray-400 text-sm'>
                    {track.artist}
                </p>
            </Reveal>
        </div>
    </div>
);

interface NowPlayingProps {
    recentlyPlayed?: RecentlyPlayedTrack[];
}

const NowPlaying = ({ recentlyPlayed }: NowPlayingProps) => {
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
                console.error(error)
                setError('Unable to fetch currently playing data.');
            }
        };

        fetchNowPlaying();
    }, []);

    // If error, return recently played track
    if (error) {
        if (recentlyPlayed && recentlyPlayed[0]) {
            const transformedTrack: SpotifyTrack = {
                ...recentlyPlayed[0],
                isPlaying: false,
                is_local: false,
                previewUrl: null as unknown as string
            };
            return (
                <div className='my-2 space-y-2 w-full xl:w-1/2'>
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 } }}
                    >
                        <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                            <SpotifyLogo />
                            <p className='text-xl font-bold dark:text-white text-white'>Last played {recentlyPlayed[0].playedAt}</p>
                        </div>
                    </Reveal>
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
                    >
                        <SpotifyTrackView track={transformedTrack} />
                    </Reveal>
                </div>
            );
        } else {
            return null;
        }
    }

    if (!nowPlaying) {
        return (
            <div className='my-2 flex xl:flex-col xl:space-y-1 space-y-0 flex-row space-x-2 xl:space-x-0 items-center justify-center'>
                <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                    <SpotifyLogo />
                    <p className='text-xl font-bold dark:text-white text-'>Currently playing</p>
                </div>
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className='my-2 space-y-2 w-full xl:w-1/2'>
            <Reveal
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 } }}
            >
                <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                    <SpotifyLogo />
                    <p className='text-xl font-bold dark:text-white text-white'>Currently playing</p>
                </div>
            </Reveal>
            <Reveal
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
            >
                {isSpotifyTrack(nowPlaying) ? (
                    <SpotifyTrackView track={nowPlaying} />
                ) : (
                    <LocalTrackView track={nowPlaying} />
                )}
            </Reveal>
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