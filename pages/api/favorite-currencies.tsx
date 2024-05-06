import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@/src/lib/prisma";
import {getSession} from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    console.log(session);

    if (!session?.user?.email) {
        return res.status(401).json({ error: 'User email not found in session' });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
    });

    if (req.method === 'GET') {
        try {
            if (!user) {
                return res.status(401).json({ error: 'User not found in session' });
            }

            const favoriteCurrencies = await prisma.favoriteCurrencies.findMany({
                where: {
                    userId: user.id,
                },
            });

            res.status(200).json({ favoriteCurrencies });
        } catch (error) {
            console.error('Error fetching favorite currencies:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

