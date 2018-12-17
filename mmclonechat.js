const Discord = require('discord.js');
const bot = new Discord.Client();

const Discord3 = require('discord.js');
const bot3 = new Discord.Client();

const Discord5 = require('discord.js');
const bot5 = new Discord.Client();

bot3.on('ready', () => {
  console.log(`Logged in as ${bot3.user.tag}.`);
  bot3.user.setStatus('invisible')
});

bot5.on('ready', () => {
  console.log(`Logged in as ${bot5.user.tag}.`);
  bot5.user.setStatus('visible')
});

//mm

bot3.on('message', message=>{
     if (message.channel.id === ('297755805506207745')){
   if (message.author.bot3) return;

    var embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag,message.author.avatarURL)
      .setDescription(message.content)
      .setColor("#0029fc");
      bot5.channels.get('521515745985953792').send(embed);
   }

});

bot5.on('error', console.error);
bot3.on('error', console.error);

bot3.login(process.env.BOT3_TOKEN);
bot5.login(process.env.BOT5_TOKEN);
