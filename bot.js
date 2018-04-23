// require
const Discord = require('discord.js');
const path = require('path');

const client = new Discord.Client();
const {BOT_TOKEN, BOT_PREFIX} = process.env;

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
  client.user.setGame(`pomagam ludziom`);
});

client.login(BOT_TOKEN);
