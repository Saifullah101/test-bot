const Discord = require('discord.js');
const bot = new Discord.Client();
const bot1 = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}.`);
  bot.user.setStatus('invisible')
});

bot1.on('ready', () => {
  console.log(`Logged in as ${bot1.user.tag}.`);
  bot1.user.setStatus('invisible')
});

 bot.on('message', message=>{
   if (message.channel.id === ('297755805506207745')){
 if (message.author.bot) return;

  var embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setDescription(message.content)
 //   .setImage(message.attachments.array()[0].url)
    .setColor("#fc0000");
    bot1.channels.get('502659020146868224').send(embed);
 }
  });

  bot.on('message', message=>{
    if (message.channel.id === ('304913757799448577')){
  if (message.author.bot) return;

   var embed = new Discord.RichEmbed()
     .setAuthor(message.author.tag,message.author.avatarURL)
     .setDescription(message.content)
   //  .setImage(message.attachments.array()[0].url)
     .setColor("#f700fc");
     bot1.channels.get('502659427598598155').send(embed);
  }
   });

   bot.on('message', message=>{
     if (message.channel.id === ('418761218606497802')){
   if (message.author.bot) return;

    var embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag,message.author.avatarURL)
      .setDescription(message.content)
   //   .setImage(message.attachments.array()[0].url)
      .setColor("#0029fc");
      bot1.channels.get('502659883087429632').send(embed);
   }
    });

    bot.on('message', message=>{
      if (message.channel.id === ('297766472099561472')){
    if (message.author.bot) return;

     var embed = new Discord.RichEmbed()
       .setAuthor(message.author.tag,message.author.avatarURL)
       .setDescription(message.content)
      // .setImage(message.attachments.array()[0].url)
       .setColor("#00fcfc");
       bot1.channels.get('502659490186002433').send(embed);
    }
     });

bot.login("process.env.BOT_TOKEN");
bot1.login("process.env.BOT_TOKEN1");
