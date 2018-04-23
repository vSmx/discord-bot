const Discord = require('discord.js');
const client = new Discord.Client();
const {BOT_TOKEN, BOT_PREFIX} = process.env;

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
  client.user.setGame(`pomagam ludziom`);
});

client.on('message', message => {
  if (message.content === 'ping') message.reply('PONG!');
  
  message.reply(message.content); // test
});

client.login(BOT_TOKEN);
