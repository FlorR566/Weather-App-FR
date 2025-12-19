## 🔑 API Key configuration (OpenWeatherMap)

This project uses the **OpenWeatherMap API** to fetch real-time weather data.

For security reasons, **no API key is included in this repository**.  
To run the project, you must create your own API key and configure it locally.

---

### 1️⃣ Create an OpenWeatherMap API Key

1. Go to: https://openweathermap.org/
2. Create an account or log in
3. Navigate to **API Keys** in your dashboard
4. Generate a new API key

⚠️ Note:  
New API keys may take a few minutes to become active.

---

### 2️⃣ Configure the API Key in the project

Open the JavaScript file where the API key is defined (for example: `script.js`).

Replace the placeholder with your own key:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

Example:

```js
const apiKey = "abcd1234yourapikey";
```

---

### 3️⃣ Run the project locally

This project does not require any build tools or dependencies.

You can run it in one of the following ways:

Option A — Open directly in the browser

Open index.html in your browser

Option B — Using a local server (recommended)

If you use VS Code:

Install the Live Server extension

Right-click on index.html

Select "Open with Live Server"

---

### 4️⃣ Deploying to GitHub Pages

If you deploy this project using GitHub Pages, keep in mind:

The API key will be visible in the browser

This is acceptable for frontend-only educational projects

In a production environment, the API key should be stored in a backend service

---

### ℹ️ Important Note

This project is intended for learning and portfolio purposes.
In a real-world production application, the API key should be handled securely using a backend server.
