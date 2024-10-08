import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '../../lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await getNowPlaying();
        
        if (response.status === 204) {
            res.status(204).end();
            return
        }

        if (response.error) {
            return res.status(response.error.status).json({ message: response.error.message });
        }

        const albumImageUrl = response.item.album.images[0].url;
        const albumUrl = response.item.album.external_urls.spotify;
        const artist = response.item.artists.map((_artist: any) => _artist.name).join(", ");
        const artistUrl = response.item.artists[0].external_urls.spotify;
        const isPlaying = response.is_playing;
        const songUrl = response.item.external_urls.spotify;
        const title = response.item.name;
        const previewUrl = response.preview_url;
        const songUri = response.item.uri;

        const data = {
            albumImageUrl,
            albumUrl,
            artist,
            artistUrl,
            isPlaying,
            songUrl,
            title,
            previewUrl,
            songUri
        };

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching now playing data:', error);
        return res.status(500).json({ message: 'Failed to fetch now playing data' });
    }
}