import { NextApiRequest, NextApiResponse } from 'next';
import { getTopTracks } from '../../lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await getTopTracks();

    if (response.error) {
      return res.status(response.error.status).json({ message: response.error.message });
    }

    const items = response.items;


    const msToMinutesAndSeconds = (ms: number) => {
      const minutes = Math.floor(ms / 60000);
      const seconds = ((ms % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds.padStart(2, '0')}`;
    };


    const tracks = items.map((item: any) => ({
      albumImageUrl: item.album.images[0].url,
      artist: item.artists.map((_artist: any) => _artist.name).join(", "),
      songUrl: item.external_urls.spotify,
      title: item.name,
      previewUrl: item.preview_url,
      songUri: item.uri,
      duration: msToMinutesAndSeconds(item.duration_ms),
      album: item.album.name
    }));

    return res.status(200).json({ tracks });
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return res.status(500).json({ message: 'Failed to fetch top tracks' });
  }
};