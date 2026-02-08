import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes'
import { ChevronDown } from 'lucide-react';

import SpotifyLogo from '@/spotify/SpotifyLogo'
import PlayingAnimation from '@/spotify/PlayingAnimation';
import { LoadingSpinner } from './LoadingSpinner';
import { Reveal } from './Reveal';
import { sanitizeExplicitSongTitle } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type topTracksResponse = {
    albumImageUrl: string,
    artist: string,
    artistUrl: string,
    isPlaying: string,
    songUrl: string,
    title: string,
    explicit: boolean,
    previewUrl: string,
    songUri: string,
    duration: string,
    album: string
    albumUrl: string,
}

type TimeRange = 'short_term' | 'medium_term' | 'long_term';

const timeRangeLabels: Record<TimeRange, string> = {
  'short_term': 'this month',
  'medium_term': 'past 6 months', 
  'long_term': 'this year'
};

const TopTracks = () => {
    const { theme } = useTheme();
    const [topTracks, setTopTracks] = useState<topTracksResponse[] | null>();
    const [error, setError] = useState<string | null>(null);
    const [timeRange, setTimeRange] = useState<TimeRange>('short_term');
    const [isLoading, setIsLoading] = useState(false);

    const fetchTopTracks = async (range: TimeRange) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/top-tracks?time_range=${range}`);
            if (!response.ok) {
                throw new Error('Failed to fetch top tracks data');
            }
            const data = await response.json();
            const tracks = data.tracks;
            setTopTracks(tracks);
            setError(null);
        } catch (error) {
            setError('Unable to fetch top tracks data.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTopTracks(timeRange);
    }, [timeRange]);

    const handleTimeRangeChange = (newTimeRange: TimeRange) => {
        setTimeRange(newTimeRange);
    };

    if (error) {
        return null;
    }

    if (!topTracks || isLoading) {
        return <div className='my-2 flex xl:flex-col xl:space-y-1 space-y-0 flex-row space-x-2 xl:space-x-0 items-center justify-end'>
            <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                <SpotifyLogo />
                <p className='text-xl font-bold text-white dark:text-white'>Top tracks {timeRangeLabels[timeRange]}</p>
            </div>
            <LoadingSpinner />
        </div>;
    }

    return (
        <div className='w-full my-2 space-y-2'>
            <Reveal
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
            >
               <div className='w-full flex justify-center'>
                 <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                     <SpotifyLogo />
                     <div className='flex items-center space-x-1'>
                         <p className='text-xl font-bold text-white dark:text-white'>Top tracks</p>
                         <DropdownMenu>
                             <DropdownMenuTrigger asChild>
                                 <button className='flex items-center space-x-1 text-xl font-bold text-white dark:text-white hover:opacity-80 transition-opacity'>
                                     <span>{timeRangeLabels[timeRange]}</span>
                                     <ChevronDown className='h-4 w-4' />
                                 </button>
                             </DropdownMenuTrigger>
                             <DropdownMenuContent align="center" className='bg-spotify border-spotify'>
                                 <DropdownMenuItem 
                                     onClick={() => handleTimeRangeChange('short_term')}
                                     className='text-white hover:bg-spotify/80 focus:bg-spotify/80'
                                 >
                                     this month
                                 </DropdownMenuItem>
                                 <DropdownMenuItem 
                                     onClick={() => handleTimeRangeChange('medium_term')}
                                     className='text-white hover:bg-spotify/80 focus:bg-spotify/80'
                                 >
                                     past 6 months
                                 </DropdownMenuItem>
                                 <DropdownMenuItem 
                                     onClick={() => handleTimeRangeChange('long_term')}
                                     className='text-white hover:bg-spotify/80 focus:bg-spotify/80'
                                 >
                                     this year
                                 </DropdownMenuItem>
                             </DropdownMenuContent>
                         </DropdownMenu>
                     </div>
                 </div>
               </div>
            </Reveal>
            <Reveal
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
            >
                <div className='space-y-2 py-2 rounded-lg bg-spotify '>
                    {topTracks.map((track, index) => (
                        <Reveal
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 8 + 0.4 } }}
                        >
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
                                        <div className='flex flex-row items-center gap-2 min-w-0'>
                                            <p className='text-white overflow-hidden text-ellipsis whitespace-nowrap hover:underline cursor-pointer min-w-0' onClick={() => window.open(track.songUrl, '_blank')}>
                                                {sanitizeExplicitSongTitle(track.title, track.explicit)}
                                            </p>
                                            {track.explicit ? (
                                                <span className='text-[10px] leading-none font-bold text-black bg-gray-200 rounded px-1.5 py-0.5 flex-shrink-0'>
                                                    E
                                                </span>
                                            ) : null}
                                        </div>
                                        <p className='text-gray-400 text-xs hover:underline cursor-pointer' onClick={() => window.open(track.artistUrl, '_blank')}>{track.artist}</p>
                                    </div>

                                </div>

                                <div className='xl:flex flex-row flex-1 justify-between space-x-4 items-center hidden mr-4 min-w-0 '>
                                    <p className='text-sm text-start text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap hover:underline cursor-pointer' onClick={() => window.open(track.albumUrl, '_blank')}>{track.album}</p>
                                    <p className='text-sm text-gray-400'>{track.duration}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Reveal>
        </div>
    )
}

export default TopTracks;
