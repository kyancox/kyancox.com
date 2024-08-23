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

    if (access_token.error) {
        return access_token;
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });

    if (response.status === 204) {
        console.error('No music is currently playing:', response.status, response.statusText);
        return { status: 204, message: 'No music is currently playing.' };
    }

    if (!response.ok) {
        console.error('Failed to fetch now playing data:', response.status, response.statusText);
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