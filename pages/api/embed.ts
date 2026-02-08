import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const rawUri = req.query.uri;
    const uri = Array.isArray(rawUri) ? rawUri[0] : rawUri;
    if (!uri) {
        return res.status(400).json({ error: 'Missing URI' });
    }

    const oEmbedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(uri)}`;

    try {
        const response = await fetch(oEmbedUrl);
        if (!response.ok) {
            return res.status(response.status).json({ error: `Failed to fetch embed code: ${response.statusText}` });
        }

        const data = await response.json();
        if (!data) {
            return res.status(502).json({ error: 'No data received' });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error('Failed to fetch embed code:', error);
        return res.status(500).json({ error: 'Failed to fetch embed code' });
    }
}
