import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes'

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
    const { theme } = useTheme();
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
        return <div className='my-2 flex xl:flex-col xl:space-y-1 space-y-0 flex-row space-x-2 xl:space-x-0 items-center justify-end'>
            <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                <SpotifyLogo />
                <p className='text-xl font-bold text-white dark:text-white'>Top tracks this month</p>
            </div>
            <LoadingSpinner />
        </div>;
    }

    return (
        <div className='w-full my-2 space-y-2'>
            <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                <SpotifyLogo />
                <p className='text-xl font-bold text-white dark:text-white'>Top tracks this month</p>
            </div>
            <div className='space-y-2 py-2 rounded-lg bg-spotify '>
                {topTracks.map((track, index) => (
                    <div key={index} className='flex flex-row items-center py-1 w-full hover:opacity-60 transition duration-50'>

                        <div className='flex flex-row items-center xl:w-2/3 w-full max-w-full '>
                            <p className='mx-4 text-white'>{index + 1}</p>
                            <Image
                                src={track.albumImageUrl}
                                alt={`${track.title} album art`}
                                width={36}
                                height={36}
                                className='rounded'
                            />

                            <div className='flex flex-col mx-4 flex-1 min-w-0'>
                                <p className='text-white overflow-hidden text-ellipsis whitespace-nowrap'>{track.title}</p>
                                <p className='text-gray-400 text-xs'>{track.artist}</p>
                            </div>

                        </div>

                        <div className='xl:flex flex-row flex-1 justify-between items-center hidden mr-4 min-w-0 '>
                            <p className='text-sm text-start text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap'>{track.album}</p>
                            <p className='text-sm text-gray-400'>{track.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopTracks;