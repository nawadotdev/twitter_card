import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { image } = req.query;

    const imageUrl = (typeof image === "string" && image.startsWith("http")) ? image : null;

    if (!imageUrl) {
        return res.status(400).json({ error: "Invalid image URL" });
    }

    const redirectTo = "https://tac.build"

    const title = "TAC.Build"
    const description = "TAC.Build"

    res.setHeader("Content-Type", "text/html");

    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="${title}">
            <meta name="twitter:description" content="${description}">
            <meta name="twitter:image" content="${imageUrl}">
            <meta property="og:title" content="${title}">
            <meta property="og:description" content="${description}">
            <meta property="og:image" content="${imageUrl}">
            <meta property="og:type" content="website">
            <title>${title}</title>
        </head>
        <body>
            <img src="${imageUrl}" alt="Image">
            ${redirectTo ? `<script>window.location.href = "${redirectTo}";</script>` : ''}
        </body>
        </html>
    `);
}
