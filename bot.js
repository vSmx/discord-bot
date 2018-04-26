const {BOT_TOKEN, BOT_PREFIX} = process.env;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
  client.user.setActivity('ja tu tylko sprzątam');
});

client.on('message', message => {
  if (message.author.bot) return;

  const messageArray = message.content.split(" ");
  const commandName = messageArray[0];
  const args = messageArray.slice(1);
  
  if (commandName === `${BOT_PREFIX}help`) {
    message.channel.send("komenda w trakcie prac");
  }
});

client.login(BOT_TOKEN);
