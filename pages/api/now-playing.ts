import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '../../lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }

    try {
        const response = await getNowPlaying();
        
        // Status 204: No content - Returned when no track is currently playing
        // This is where we would call recently-played
        if (response.status === 204) {
            res.status(204).end();
            return
        }

        if (response.error) {
            // Status 401: Unauthorized - Bad or expired token. This can happen if the user revoked access
            // Status 403: Forbidden - Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...)
            // Status 429: Too Many Requests - The app has exceeded its rate limits
            return res.status(response.error.status).json({ message: response.error.message });
        }

        const item = response?.item;
        if (!item) {
            return res.status(204).end();
        }

        const is_local: boolean = Boolean(item.is_local);
        const artists = Array.isArray(item.artists) ? item.artists : [];
        const firstArtist = artists[0];
        const album = item.album ?? null;
        const albumImages = Array.isArray(album?.images) ? album.images : [];

        const title = item.name ?? 'Unknown Track';
        const explicit = is_local ? false : Boolean(item.explicit);
        const songUri = item.uri ?? '';
        const isPlaying = Boolean(response.is_playing);
        const albumImageUrl = is_local ? null : albumImages[0]?.url ?? 'https://open.spotify.com';
        const albumUrl = is_local ? null : album?.external_urls?.spotify ?? 'https://open.spotify.com';
        const artist = is_local
            ? 'From Local Files'
            : artists
                .map((_artist: any) => _artist?.name)
                .filter(Boolean)
                .join(', ') || 'Unknown Artist';
        const artistUrl = is_local ? null : firstArtist?.external_urls?.spotify ?? 'https://open.spotify.com';
        const songUrl = is_local ? null : item.external_urls?.spotify ?? 'https://open.spotify.com';
        const previewUrl = is_local ? null : item.preview_url ?? null;

        const data = {
            is_local,
            albumImageUrl,
            albumUrl,
            artist,
            artistUrl,
            isPlaying,
            songUrl,
            title,
            explicit,
            previewUrl,
            songUri
        };

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching now playing data:', error);
        return res.status(500).json({ message: 'Failed to fetch now playing data' });
    }
}
