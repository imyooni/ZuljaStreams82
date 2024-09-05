import express from 'express';
import fetch from 'node-fetch';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

config(); // This loads environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get('/', (req, res) => {
    res.send('Welcome to the Twitch Streamer API!');
});

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

// Route to proxy the Chzzk API request
app.get('/proxy/channels/:streamerID', async (req, res) => {
  const streamerID = req.params.streamerID;
  const apiUrl = `https://api.chzzk.naver.com/service/v1/channels/${streamerID}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Your User Agent',  // Add required headers
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

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
