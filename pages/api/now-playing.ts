import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '../../lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

        const is_local : boolean = response.item.is_local
        // These fields are always present for local files
        const title = response.item.name;
        const explicit = is_local ? false : response.item.explicit;
        const songUri = response.item.uri;
        const isPlaying = response.is_playing;
        // The following fields may be null for local files
        const albumImageUrl = is_local ? 'https://open.spotify.com' : response.item.album.images[0].url;
        const albumUrl = is_local ? 'https://open.spotify.com' : response.item.album.external_urls.spotify;
        const artist = is_local ? 'From Local Files' : response.item.artists.map((_artist: any) => _artist.name).join(", ");
        const artistUrl = is_local ? 'https://open.spotify.com' : response.item.artists[0].external_urls.spotify;
        const songUrl = is_local ? 'https://open.spotify.com' : response.item.external_urls.spotify;
        const previewUrl = is_local ? 'https://open.spotify.com' : response.preview_url;

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
