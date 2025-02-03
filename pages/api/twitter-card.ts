import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { image, redirectUrl, title, description } = req.query;

    const imageUrl = (typeof image === "string" && image.startsWith("http")) ? image : null;

    if (!imageUrl) {
        return res.status(400).json({ error: "Invalid image URL" });
    }

    const redirectTo = (typeof redirectUrl === "string" && redirectUrl.startsWith("http"))
        ? redirectUrl
        : null;

    const dynamicTitle = title || "@nawa.dev Twitter Card";
    const dynamicDescription = description || "Dynamic image for Twitter preview. Powered by @nawa.dev.";

    res.setHeader("Content-Type", "text/html");

    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="${dynamicTitle}">
            <meta name="twitter:description" content="${dynamicDescription}">
            <meta name="twitter:image" content="${imageUrl}">
            <meta property="og:title" content="${dynamicTitle}">
            <meta property="og:description" content="${dynamicDescription}">
            <meta property="og:image" content="${imageUrl}">
            <meta property="og:type" content="website">
            <title>${dynamicTitle}</title>
        </head>
        <body>
            <h1>${dynamicTitle}</h1>
            <img src="${imageUrl}" alt="Image">
            ${redirectTo ? `<script>window.location.href = "${redirectTo}";</script>` : ''}
        </body>
        </html>
    `);
}
