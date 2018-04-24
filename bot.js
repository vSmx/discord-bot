// require
const {BOT_TOKEN, BOT_PREFIX} = process.env;
const Discord = require('discord.js');
const path = require('path');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
  client.user.setActivity(`ja tu tylko sprzątam`);
});

client.on('message', message => {
  if (message.author.bot) return;
  message.channel.send(`test`);
});

client.login(BOT_TOKEN);
