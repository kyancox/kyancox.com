import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { uri } = req.query;

    if (!uri) {
        return res.status(400).json({ error: 'Missing URI' });
    }

    const oEmbedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(uri as string)}`;


    const response = await fetch(oEmbedUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch embed code: ${response.statusText}`);
    }

    const data = await response.json();
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(500).json({ error: 'No data received' });
    }

}