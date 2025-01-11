import { NextApiRequest, NextApiResponse } from 'next';
import { getRecentlyPlayed } from '../../lib/spotify';

// Define the track type
export type RecentlyPlayedTrack = {
  albumImageUrl: string;
  artist: string;
  artistUrl: string;
  songUrl: string;
  title: string;
  songUri: string;
  duration: string;
  album: string;
  albumUrl: string;
  playedAt: string;
};

// Define the API response type
export type ApiResponse = {
  tracks: RecentlyPlayedTrack[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse | { message: string }>) {
  try {
    const response = await getRecentlyPlayed();

    if (response.error) {
      return res.status(response.error.status).json({ message: response.error.message });
    }

    const items = response.items;

    const msToMinutesAndSeconds = (ms: number) => {
      const minutes = Math.floor(ms / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const tracks: RecentlyPlayedTrack[] = items.map((item: any) => ({
      albumImageUrl: item.track.album.images[0].url,
      artist: item.track.artists.map((_artist: any) => _artist.name).join(", "),
      artistUrl: item.track.artists[0].external_urls.spotify,
      songUrl: item.track.external_urls.spotify,
      title: item.track.name,
      songUri: item.track.uri,
      duration: msToMinutesAndSeconds(item.track.duration_ms),
      album: item.track.album.name,
      albumUrl: item.track.album.external_urls.spotify,
      playedAt: parseDateTime(item.played_at)
    }));

    return res.status(200).json({ tracks });
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return res.status(500).json({ message: 'Failed to fetch top tracks' });
  }
};

function parseDateTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();

  // Format time to HH:MM AM/PM
  const timeString = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Chicago' 
  });

  // Calculate days difference
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Generate relative day string
  if (diffDays === 0) {
    return `${timeString}`; // Just show time if it's today
  } else if (diffDays === 1) {
    return `Yesterday, ${timeString}`;
  } else {
    return `${diffDays}d ago, ${timeString}`;
  }
}