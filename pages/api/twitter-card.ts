import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { image } = req.query;

    // If 'image' is a string and starts with 'http', use it as the image URL
    // Otherwise, use the default image
    const imageUrl = (typeof image === "string" && image.startsWith("http")) 
        ? image 
        : "https://cdn.jsdelivr.net/gh/nawadotdev/TwitterCard@main/default.png";

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <!-- Twitter Card meta tags -->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="Dynamic Twitter Image">
            <meta name="twitter:description" content="This image changes dynamically.">
            <meta name="twitter:image" content="${imageUrl}">

            <!-- Open Graph meta tags -->
            <meta property="og:title" content="Dynamic Image">
            <meta property="og:description" content="This page generates a preview on Twitter and other platforms.">
            <meta property="og:image" content="${imageUrl}">
            <meta property="og:type" content="website">

            <title>Twitter Image Sharing</title>
        </head>
        <body>
            <h1>Twitter Image</h1>
            <img src="${imageUrl}" alt="Image">
        </body>
        </html>
    `);
}
