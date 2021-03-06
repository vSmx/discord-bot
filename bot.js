const {BOT_TOKEN, BOT_PREFIX, BOT_DESCRIPTION, BOT_HELP} = process.env;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
  client.user.setActivity(`${BOT_PREFIX}${BOT_HELP} | ${BOT_DESCRIPTION}`);
});

client.on('message', message => {
  if (message.author.bot || message.channel.type === "dm") return;
  
  const args = message.content.slice(BOT_PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  switch (command) {
    case "help" :
      message.reply("wkrótce.");
      break;
    case "blah" :
      message.channel.send('Meh.');
      break;
  }
  
  if (command === `${BOT_PREFIX}${BOT_HELP}`) {
    identity.user.send("Wkrótce.");
    message.channel.send("Sprawdź swoje **prywatne wiadomości**, aby uzyskać pomoc!");
  }
});

client.login(BOT_TOKEN);
