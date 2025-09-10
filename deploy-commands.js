// deploy-commands.js
const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const commands = [
  new SlashCommandBuilder()
    .setName('frozen')
    .setDescription('Receive a fact about Game of Thrones of Viserion')
    .addStringOption(option =>
      option.setName('mind')
        .setDescription('Wich mind?')
        .setRequired(false)
    )
    .toJSON(),
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Registring slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );

    console.log('✅ Registry commands sucess!');
  } catch (error) {
    console.error('Error registring command :', error);
  }
})();