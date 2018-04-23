const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
});

client.on('message', message => {
  if (message.content === 'ping') message.reply('PONG!');
});

client.login(process.env.BOT_TOKEN);
