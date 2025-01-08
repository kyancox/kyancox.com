// Inspiration from:
// https://medium.com/@stvehayes/working-with-spotifys-api-to-display-currently-playing-with-react-99544f8797d8
// https://leerob.io/blog/spotify-api-nextjs

import querystring from 'querystring';
import dotenv from 'dotenv';
dotenv.config();

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = btoa(`${client_id}:${client_secret}`);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;


const getAccessToken = async () => {
    try {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: querystring.stringify({
                grant_type: 'refresh_token',
                refresh_token,
            }),
        });

        if (!response.ok) {
            console.error('Failed to fetch access token:', response.status, response.statusText);
            return { error: { status: response.status, message: response.statusText } };
        }

        const data = await response.json();
        const access_token = data.access_token;

        return access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        return { error: { status: 500, message: 'Internal Server Error' } };
    }
};


export const getNowPlaying = async () => {
    const access_token = await getAccessToken();

    // Return early if there was an error getting the access token
    // Typically 401 (invalid client credentials) or 400 (invalid grant)
    if (access_token.error) {
        return access_token;
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });

    // Status 204: No content - Returned when no track is currently playing
    // This is not an error, just indicates silence/no active playback
    // If no music is playing, call recently played endpoint here. 
    if (response.status === 204) {
        console.error('No music is currently playing:', response.status, response.statusText);
        return { status: 204, message: 'No music is currently playing.' };
    }

    // Handle other error responses:
    // - 401: Unauthorized - Bad or expired token
    // - 403: Forbidden - Bad OAuth request
    // - 429: Too Many Requests - Rate limit exceeded
    if (!response.ok) {
        console.error('Failed to fetch now playing data:', response.status, response.statusText);
        return { error: { status: response.status, message: response.statusText } };
    }

    // Handle JSON parsing errors
    // This could happen if Spotify returns malformed JSON (rare)
    // or if there are network/connectivity issues during the response
    try {
        const data = await response.json();
        // console.log(data)
        // When this data is returned for local files, data.item.album.images[0].url will be undefined
        getRecentlyPlayed()  
        const is_local : boolean = data.item.is_local

        if (is_local) {
        }

        return data;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return { error: { status: response.status, message: 'Invalid JSON response' } };
    }
};

export const getTopTracks = async () => {
    const access_token = await getAccessToken();
    
    if (access_token.error) {
        return access_token;
    }

    const response = await fetch(`${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=5&offset=0`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    if (!response.ok) {
        console.error('Failed to fetch top tracks data:', response.status, response.statusText);
        return { error: { status: response.status, message: response.statusText } };
    }

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return { error: { status: response.status, message: 'Invalid JSON response' } };
    }
};

export const getRecentlyPlayed = async () => {
    const access_token = await getAccessToken();
    
    if (access_token.error) {
        return access_token;
    }

    const response = await fetch(`${RECENTLY_PLAYED_ENDPOINT}?limit=10`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    if (!response.ok) {
        console.error('Failed to fetch recently played data:', response.status, response.statusText);
        return { error: { status: response.status, message: response.statusText } };
    }

    try {
        const data = await response.json();
        console.log('data.items[0]')
        console.log(data.items[3])
        console.log()

        // console.log(data.items[0].track.album)
        return data;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return { error: { status: response.status, message: 'Invalid JSON response' } };
    }
};