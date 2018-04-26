const {BOT_TOKEN, BOT_PREFIX} = process.env;
const Discord = require('discord.js');
const client = new Discord.Client();

const DiscordRPC = require("discord-rpc");
const rpc = new DiscordRPC.Client({
  transport: 'ipc'
});

function setAgain() {
    rpc.setActivity({
        details: "crackhouse.pl",
        state: "test test test",
        largeImageKey: undefined,
        largeImageText: undefined,
        instance: true,
    });
}

rpc.on("ready", function () {
    setAgain();
});

client.on('ready', () => {
  console.log('Bot został uruchomiony pomyślnie.');
  rpc.login(client.user.id).catch(console.error);
});

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
