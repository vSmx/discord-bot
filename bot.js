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
    message.reply("w trakcie prac");
  } else if (commandName === `${BOT_PREFIX}throw`) {
    const embed = new Discord.RichEmbed()
    .setColor("#" + ((1 << 24) * Math.random() | 0).toString(16).slice(-6))
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .addField("Losowanie się powiodło", "Wylosowałeś/aś liczbę o numerze: " + (Math.floor(Math.random() * 6) + 1))
    .setFooter("crackhouse.pl");
    return message.channel.send(embed); 
  }
});

client.login(BOT_TOKEN);
