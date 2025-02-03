import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { image } = req.query;

    // Eğer `image` bir string değilse, varsayılan görsel kullan
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
            
            <!-- Twitter Card -->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="Dinamik Twitter Görseli">
            <meta name="twitter:description" content="Bu görsel dinamik olarak değişiyor.">
            <meta name="twitter:image" content="${imageUrl}">

            <!-- Open Graph -->
            <meta property="og:title" content="Dinamik Görsel">
            <meta property="og:description" content="Bu sayfa Twitter ve diğer platformlarda önizleme oluşturur.">
            <meta property="og:image" content="${imageUrl}">
            <meta property="og:type" content="website">

            <title>Twitter Görsel Paylaşımı</title>
        </head>
        <body>
            <h1>Twitter Görseli</h1>
            <img src="${imageUrl}" alt="Görsel">
        </body>
        </html>
    `);
}
