// https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { tools } from '../../lib/tools';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { name },
    } = req;

    switch (req.method) {
        case 'GET': {
            if (typeof name !== 'string') {
                res.statusCode = 400;
                res.end('A tool name must be provided as type string');
            } else {
                // connect to your data source and get return data
                const tool = tools.find(({ name: toolName }) => toolName === name);
                if (tool) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(tool);
                } else {
                    res.statusCode = 400;
                    res.end(`Unable to find tool named ${name}`);
                }
            }
            break;
        }
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
