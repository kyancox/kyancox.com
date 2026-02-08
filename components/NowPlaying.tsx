import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import SpotifyLogo from '@/spotify/SpotifyLogo'
import PlayingAnimation from '@/spotify/PlayingAnimation';
import defaultcoverart from '@/public/defaultcoverart.jpeg'
import { LoadingSpinner } from './LoadingSpinner';
import { Reveal } from './Reveal';
import type { RecentlyPlayedTrack } from '@/pages/api/recently-played';
import { formatDateTime, sanitizeExplicitSongTitle, sanitizeSongTitle } from '@/lib/utils';

// Base type only includes common properties
type BaseTrack = {
    artist: string,
    isPlaying: boolean,
    title: string,
    explicit: boolean,
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

const SpotifyTrackView = ({ track, isPaused }: { track: SpotifyTrack, isPaused?: boolean }) => {
    console.log('SpotifyTrackView - isPaused:', isPaused, 'track.isPlaying:', track.isPlaying);
    
    return (
        <div className='flex flex-row p-2.5 rounded-lg space-x-3 shadow-lg min-w-36 w-full xl:inline-flex'
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
                        {(track.isPlaying || isPaused) ? <PlayingAnimation /> : null}
                        <div className='flex-1 min-w-0'>
                            <div className='flex flex-row items-center gap-2 w-52 sm:w-full min-w-0'>
                                <p className='font-bold text-lg text-white overflow-hidden text-ellipsis whitespace-nowrap hover:underline cursor-pointer min-w-0'
                                    onClick={() => window.open(track.songUrl, '_blank')}>
                                    {sanitizeExplicitSongTitle(track.title, track.explicit)}
                                </p>
                                {track.explicit ? (
                                    <span className='text-[10px] leading-none font-bold text-black bg-gray-200 rounded px-1.5 py-0.5 flex-shrink-0'>
                                        E
                                    </span>
                                ) : null}
                            </div>
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
};

const LocalTrackView = ({ track, isPaused }: { track: LocalTrack, isPaused?: boolean }) => {
    const sanitizedTitle = sanitizeSongTitle(track.title);
    const hasExplicitLanguage = sanitizedTitle !== track.title;

    return (
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
                        {(track.isPlaying || isPaused) ? <PlayingAnimation /> : ''}
                        <div className='flex-1 min-w-0'>
                            <div className='flex flex-row items-center gap-2 w-52 sm:w-full min-w-0'>
                                <p className='font-bold text-lg text-white overflow-hidden text-ellipsis whitespace-nowrap min-w-0'>
                                    {sanitizedTitle}
                                </p>
                                {hasExplicitLanguage ? (
                                    <span className='text-[10px] leading-none font-bold text-black bg-gray-200 rounded px-1.5 py-0.5 flex-shrink-0'>
                                        E
                                    </span>
                                ) : null}
                            </div>
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
};

interface NowPlayingProps {
    recentlyPlayed?: RecentlyPlayedTrack[];
}

const NowPlaying = ({ recentlyPlayed }: NowPlayingProps) => {
    const [nowPlaying, setNowPlaying] = useState<NowPlayingResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [wasPlaying, setWasPlaying] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const nowPlayingRef = useRef<NowPlayingResponse | null>(null);
    const wasPlayingRef = useRef(false);
    const isInitialLoadRef = useRef(true);

    useEffect(() => {
        let isMounted = true;

        const fetchNowPlaying = async () => {
            try {
                const response = await fetch('/api/now-playing');
                console.log('API Response status:', response.status);
                
                // Handle 204 specifically - no music playing
                if (response.status === 204) {
                    console.log('Got 204 - nowPlaying exists?', !!nowPlayingRef.current);
                    // Only set isPaused if we already have a nowPlaying track
                    if (!isMounted) {
                        return;
                    }
                    if (nowPlayingRef.current) {
                        console.log('Setting isPaused to true');
                        setIsPaused(true);
                    }
                    // Otherwise, this is truly "not playing" - let it fall through to error
                    else {
                        console.log('No previous track, setting error');
                        setError('No music playing');
                    }
                    return;
                }
                
                if (!response.ok) {
                    throw new Error('Failed to fetch now playing data');
                }
                const data = await response.json();
                console.log('Got playing data, isPlaying:', data.isPlaying);
                if (!isMounted) {
                    return;
                }
                
                // Handle initial load with paused track
                if (isInitialLoadRef.current && !data.isPlaying) {
                    console.log('Initial load with paused track');
                    setIsPaused(true);
                    setIsInitialLoad(false);
                    isInitialLoadRef.current = false;
                }
                // Check if we transitioned from playing to paused
                else if (wasPlayingRef.current && !data.isPlaying) {
                    console.log('Detected pause transition');
                    setIsPaused(true);
                } else if (data.isPlaying) {
                    console.log('Currently playing, clearing pause state');
                    setIsPaused(false);
                    if (isInitialLoadRef.current) {
                        setIsInitialLoad(false);
                        isInitialLoadRef.current = false;
                    }
                }
                
                setNowPlaying(data);
                nowPlayingRef.current = data;
                setWasPlaying(data.isPlaying);
                wasPlayingRef.current = data.isPlaying;
                setError(null);
            } catch (error) {
                console.error(error)
                if (isMounted) {
                    setError('Unable to fetch currently playing data.');
                }
            }
        };

        fetchNowPlaying();
        const interval = window.setInterval(fetchNowPlaying, 5000);
        return () => {
            isMounted = false;
            window.clearInterval(interval);
        };
    }, []);

    // When paused, show the last playing track with animation
    if (isPaused && nowPlaying) {
        return (
            <div className='my-2 space-y-2 w-full xl:w-1/2'>
                <Reveal
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 } }}
                >
                    <div className="w-full flex justify-center">
                        <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                            <SpotifyLogo />
                            <p className='text-xl font-bold dark:text-white text-white'>Recently played</p>
                        </div>
                    </div>
                </Reveal>
                <Reveal
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
                >
                    {isSpotifyTrack(nowPlaying) ? (
                        <SpotifyTrackView track={{...nowPlaying, isPlaying: false}} isPaused={false} />
                    ) : (
                        <LocalTrackView track={{...nowPlaying, isPlaying: false}} isPaused={false} />
                    )}
                </Reveal>
            </div>
        );
    }

    // If error, return recently played track
    if (error || (isPaused && !nowPlaying)) {
        if (recentlyPlayed && recentlyPlayed[0]) {
            const transformedTrack: SpotifyTrack = {
                ...recentlyPlayed[0],
                isPlaying: false, // Never show animation for "Last played"
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
                            <p className='text-xl font-bold dark:text-white text-white'>
                                Last played {formatDateTime(recentlyPlayed[0].playedAt)}
                            </p>
                        </div>
                    </Reveal>
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
                    >
                        <SpotifyTrackView track={transformedTrack} isPaused={false} />
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
                <div className="w-full flex justify-center">
                    <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                        <SpotifyLogo />
                        <p className='text-xl font-bold dark:text-white text-white'>Currently playing</p>
                    </div>
                </div>
            </Reveal>
            <Reveal
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
            >
                {isSpotifyTrack(nowPlaying) ? (
                    <SpotifyTrackView track={nowPlaying} isPaused={false} />
                ) : (
                    <LocalTrackView track={nowPlaying} isPaused={false} />
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
//                 const embedResponse = await fetch(`
