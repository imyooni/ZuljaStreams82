import express from 'express';
import fetch from 'node-fetch';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Twitch Streamer API and Discord Webhook Service!');
});

// Route to send message to Discord webhook
app.post('/send-webhook', async (req, res) => {
    const webhookURL = process.env.WEBHOOK;
    const { content, username } = req.body;

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: content || 'Default message from webhook',
                username: username || 'Webhook Bot',
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to send webhook: ${response.statusText}`);
        }

        res.status(200).json({ message: 'Message sent to Discord successfully!' });
    } catch (error) {
        console.error('Error sending message to Discord:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});


// Route to get Twitch streamer info by name
app.get('/api/streamer/:name', async (req, res) => {
    const streamerName = req.params.name;

    try {
        const userUrl = `https://api.twitch.tv/helix/users?login=${streamerName}`;
        const userResponse = await fetch(userUrl, {
            headers: {
                'Client-ID': process.env.CLIENT_ID,
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const userData = await userResponse.json();

        if (userData.data.length > 0) {
            const user = userData.data[0];
            const userId = user.id;

            const streamUrl = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
            const streamResponse = await fetch(streamUrl, {
                headers: {
                    'Client-ID': process.env.CLIENT_ID,
                    'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
                }
            });
            const streamData = await streamResponse.json();
            const isLive = streamData.data.length > 0;
            let gameCategory = null;

            if (isLive) {
                const gameId = streamData.data[0].game_id;

                const gameUrl = `https://api.twitch.tv/helix/games?id=${gameId}`;
                const gameResponse = await fetch(gameUrl, {
                    headers: {
                        'Client-ID': process.env.CLIENT_ID,
                        'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
                    }
                });
                const gameData = await gameResponse.json();
                if (gameData.data.length > 0) {
                    gameCategory = gameData.data[0].name;
                }
            }

            return res.json({
                profileImage: user.profile_image_url,
                user: user.display_name,
                displayName: user.login,
                online: isLive,
                game: gameCategory
            });
        }

        return res.status(404).json({ error: 'Streamer not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Proxy route for Chzzk API
app.get('/proxy/channels/:streamerID', async (req, res) => {
    const streamerID = req.params.streamerID;
    const apiUrl = `https://api.chzzk.naver.com/service/v1/channels/${streamerID}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'User-Agent': 'Your User Agent', // Add required headers if needed
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Error fetching data from Chzzk API' });
        }

        const data = await response.json();
        res.json(data); // Send API data to the client
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
