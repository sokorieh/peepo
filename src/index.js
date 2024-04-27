// put .env file at the root, assuming index.js or main.js is in a src folder
require('dotenv').config({ path: '../.env' });

const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const client = new Client({ 
  intents: [GatewayIntentBits.Guilds] 
  // MessageContent
  // GuildMessages 
  // GuildMembers
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(process.env.TOKEN);