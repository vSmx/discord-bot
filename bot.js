const {BOT_TOKEN, BOT_PREFIX, BOT_DESCRIPTION, BOT_HELP} = process.env;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
  client.user.setActivity(`${BOT_PREFIX}${BOT_HELP} | ${BOT_DESCRIPTION}`);
});

client.on('message', message => {
  if (message.author.bot || message.channel.type === "dm") return;
  
  const identity = message.guild.members.get(message.author.id);
  const args = message.content.slice(BOT_PREFIX.length).split(' ');
  const command = args.shift().toLowerCase();
  
  if (command === `${BOT_PREFIX}${BOT_HELP}`) {
    identity.user.send("Wkrótce.");
    message.channel.send("Sprawdź swoje **prywatne wiadomości**, aby uzyskać pomoc!");
  } else if (command === `${BOT_PREFIX}prune`) {
    const amount = parseInt(args[0]);
    if (isNaN(amount)) {
        return message.reply("to nie wydaje się być prawidłową liczbą.");
    }
    message.channel.bulkDelete(amount, true);
  }
});

client.login(BOT_TOKEN);
