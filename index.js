require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const OpenAI = require("openai");

// Model API KEY
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Discord configurations
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// Bot personalization
const personality = `
You will work on a Discord Server as Viserion, the Frost Dragon from Game of Thrones.
Be majestic, mysterious, and imposing. Your responses are enigmatic, powerful, and often tinged with dark humor.
You should maintain a linear and engaging conversation, basing your responses on the server's message history.
Interact with the users (using the chat history), beeing a member and friend of the group, offering opinions, commenting on users messages, and raising other points naturally.
`;

// To slash commands
const command = `
Give a fact about game of thrones
`;

client.once("ready", () => {
    console.log("Viserion is online and ready to frost your mind!");
});

// When a message is send to server
client.on("messageCreate", async (message) => {
  // Random chance of response
    if (Math.random() < 0.7) {
        try {
            // Generate a responde using chat-gpt-5-nano
            const response = await openai.chat.completions.create({
                model: "gpt-5-nano",
                messages: [
                    { role: "system", content: personality },
                 { role: "user", content: message.content },
                ],
                max_tokens: 200,
                temperature: 0.5,
            });

            const reply = response.choices[0].message.content.trim();
            await message.reply(reply);
        } catch (error) {
            console.error("Erro in OpenAI API:", error);
            await message.reply("Viserion isn't here right now");
        }
    }
});


//Creates slash commands for server chat
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'frozen') {
    const mind = interaction.options.getString('wich mind?');

    try {
        await interaction.deferReply();
      const response = await openai.chat.completions.create({
        model: "gpt-5-nano",
        messages: [
          { role: "system", content: personality },
          { role: "user", content: mind },
        ],
        max_tokens: 200,
        temperature: 0.5,
      });

      const reply = response.choices[0].message.content.trim();
      await interaction.editReply(reply);
    } catch (error) {
      console.error("Erro running slash command:", error);
      await interaction.reply("Viserion is shrouded in mist... try again.");
    }
  }
});

// Discord Login
client.login(process.env.DISCORD_TOKEN);