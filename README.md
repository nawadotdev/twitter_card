# 📷 Twitter Card API

This API dynamically generates an HTML page with Open Graph and Twitter Card metadata, allowing images to be previewed on Twitter and other platforms. When users click on the shared link, they are redirected to a specified URL.

## ✨ Features
- 📌 **Dynamic Twitter & Open Graph previews**  
- 🎯 **Custom title and description support**  
- 🔗 **Automatic redirection on click**  

## 🚀 Usage

### 📡 API Endpoint:
```
GET https://twitter-card-psi.vercel.app/api/twitter-card
```

### 🛠 Query Parameters:
| Parameter     | Type   | Required | Description |
|--------------|--------|----------|-------------|
| `image`      | URL    | ✅       | The direct URL of the image to display in the preview. |
| `redirectUrl` | URL    | ❌       | The URL where users will be redirected when they click the image. |
| `title`      | String | ❌       | The title of the preview. Defaults to `@nawa.dev Twitter Card`. |
| `description` | String | ❌       | The description of the preview. Defaults to `"Dynamic image for Twitter preview. Powered by @nawa.dev."`. |

## 📌 Example Usage

### 1️⃣ **Basic Twitter Card**
```url
https://twitter-card-psi.vercel.app/api/twitter-card?image=<IMAGE URL>
```

### 2️⃣ **With Custom Title & Description**
```url
https://twitter-card-psi.vercel.ap/api/twitter-card?image=<IMAGE_URL>&redirectUrl=<REDIRECT_URL>&title=<TITLE>&description=<DESCRIPTION>
```

## 📜 How It Works
1. **The URL is shared on Twitter.**  
2. **Twitter fetches metadata (image, title, and description).**  
3. **When clicked, users are redirected to `redirectUrl`.**  

🚀 **Perfect for Web3 projects, promotions, and more!**
