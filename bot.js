const {BOT_TOKEN, BOT_PREFIX} = process.env;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
  client.user.setActivity({
    details: "test",
    state: "test2",
    largeImageKey: undefined,
    largeImageText: undefined,
    instance: true,
  });
});
asd

client.on('message', message => {
  if (message.author.bot || message.channel.type === "dm") return;
  
  const identity = message.guild.members.get(message.author.id);
  const messageArray = message.content.split(" ");
  const commandName = messageArray[0];
  const args = messageArray.slice(1);
  
  if (commandName === `${BOT_PREFIX}help`) {
    identity.user.send("test");
    message.channel.send("Sprawdź swoje **prywatne wiadomości**, aby uzyskać pomoc!");
  }
});

client.login(BOT_TOKEN);
