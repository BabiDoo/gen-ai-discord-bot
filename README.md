# 🐉 gen-ai-discord-bot

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org/)
[![Discord.js](https://img.shields.io/badge/discord.js-v14-blue?logo=discord)](https://discord.js.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-black?logo=openai)](https://openai.com/)
[![Last Commit](https://img.shields.io/github/last-commit/BabiDoo/gen-ia-discord-bot)](https://github.com/BabiDoo/gen-ia-discord-bot/commits/main)

An easy and customizable template to build **Discord bots** powered by **LLM (Large Language Models)**.
With this project, you can run personalized slash commands and easily extend the bot’s behavior for your server.

---

* Connects to LLM APIs (e.g., OpenAI).
* Ready-to-use **slash command** structure.
* Personality and behavior fully customizable.
* Written in **JavaScript (Node.js)**.
* Simple, extendable, and beginner-friendly.

---

## 📂 Project Structure

```
gen-ai-discord-bot/
├── .gitignore           
├── README.md            
├── deploy-commands.js   
├── index.js             
├── package.json         
├── package-lock.json    
└── viserion.jpg 
```

---

## Requirements

* [Node.js](https://nodejs.org/) version 18+
* An account in the [Discord Developer Portal](https://discord.com/developers/applications)
* An API key for the LLM provider you want to integrate (e.g., OpenAI)

---

## 🔑 Getting the Correct Discord Keys

To run the bot, you’ll need three important values from the Discord Developer Portal:

1. **Create an Application**

   * Go to [Discord Developer Portal](https://discord.com/developers/applications).
   * Click **New Application**, give it a name (e.g., *Viserion Bot*), and save.

2. **Create the Bot User**

   * Inside your new application, go to the **Bot** tab.
   * Click **Add Bot** → confirm.
   * Here you’ll find the **Bot Token** → copy it and use it as `DISCORD_TOKEN` in your `.env`.

     > ⚠️ Keep this token secret! If leaked, anyone can control your bot.

3. **Get the Client ID**

   * Go to the **OAuth2 → General** tab.
   * Copy the **Application ID** → this is your `CLIENT_ID`.

4. **Get the Guild (Server) ID**

   * In Discord, go to **User Settings → Advanced** and enable *Developer Mode*.
   * Right-click your server name → **Copy Server ID** → this is your `GUILD_ID`.

5. **Invite the Bot to Your Server**

   * Go to **OAuth2 → URL Generator**.
   * Under **Scopes**, check `bot` and `applications.commands`.
   * Under **Bot Permissions**, select the permissions your bot needs (at least *Send Messages* and *Use Slash Commands*).
   * Copy the generated URL, paste it into your browser, and invite the bot to your server.

---

## ⚙️ Installation & Setup

1. Clone this repository:

```bash
git clone https://github.com/BabiDoo/gen-ia-discord-bot.git
cd gen-ia-discord-bot
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file at the project root and add your credentials:

```env
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id
GUILD_ID=your_discord_guild_id
OPENAI_API_KEY=your_openai_api_key
```

4. Deploy slash commands to your Discord server:

```bash
node deploy-commands.js
```

5. Start the bot:

```bash
node index.js
```

---

## 🎮 Example Usage

In your Discord server, type:

```
/fact
```

And the bot will reply with a random **Game of Thrones** fact (or whatever you configure).

---

## 🤝 Contributing

Contributions are welcome!
To contribute:

1. Fork this repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Added a new feature'`
4. Push to your branch: `git push origin feature-name`
5. Open a Pull Request
