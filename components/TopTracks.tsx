import { useEffect, useState } from 'react';
import Image from 'next/image';

import SpotifyLogo from '@/spotify/SpotifyLogo'
import PlayingAnimation from '@/spotify/PlayingAnimation';
import { LoadingSpinner } from './LoadingSpinner';

type topTracksResponse = {
    albumImageUrl: string,
    artist: string,
    isPlaying: string,
    songUrl: string,
    title: string,
    previewUrl: string,
    songUri: string,
    duration: string,
    album: string
}

const TopTracks = () => {
    const [topTracks, setTopTracks] = useState<topTracksResponse[] | null>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTopTracks = async () => {
            try {
                const response = await fetch('/api/top-tracks');
                if (!response.ok) {
                    throw new Error('Failed to fetch now playing data');
                }
                const data = await response.json();
                const tracks = data.tracks
                setTopTracks(tracks);
            } catch (error) {
                setError('Unable to fetch currently playing data.');
            }
        };

        fetchTopTracks();
    }, []);

    if (error) {
        return null;
    }

    if (!topTracks) {
        return <div className='flex flex-col items-center justify-center space-y-1'>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <SpotifyLogo />
                <p className='text-xl font-bold'>Top tracks this month</p>
            </div>
            <LoadingSpinner />
        </div>;
    }

    return (
        <div className='lg:w-1/2 md:w-2/3 mx-4 my-4 space-y-2'>
            <div className='flex flex-row items-center justify-start space-x-2'>
                <SpotifyLogo />
                <p className='text-xl font-bold'>Top tracks this month</p>
            </div>
            <div className='space-y-2 py-2 rounded-lg  ' style={{ backgroundColor: '#121212' }}>
                {topTracks.map((track, index) => (
                    <div key={index} className='flex flex-row items-center py-1 w-full hover:opacity-60 transition duration-50'>

                        <div className='flex flex-row items-center xl:w-2/3  '>
                            <p className='mx-4'>{index + 1}</p>
                            <Image
                                src={track.albumImageUrl}
                                alt={`${track.title} album art`}
                                width={36}
                                height={36}
                                className='rounded'
                            />

                            <div className='flex flex-col mx-4'>
                                <p className=''>{track.title}</p>
                                <p className='text-gray-400 text-xs'>{track.artist}</p>
                            </div>

                        </div>

                        <div className='xl:flex flex-row flex-1 justify-between items-center hidden mr-4'>
                            <p className='text-sm text-start text-gray-400'>{track.album}</p>
                            <p className='text-sm text-gray-400'>{track.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopTracks;