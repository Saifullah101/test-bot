const Discord = require('discord.js');
const bot = new Discord.Client();

const Discord1 = require('discord.js');
const bot1 = new Discord.Client();

const Discord2 = require('discord.js');
const bot2 = new Discord.Client();
let guildArray = bot1.guilds.array();

const Discord3 = require('discord.js');
const bot3 = new Discord.Client();


const Discord4 = require('discord.js');
const bot4 = new Discord.Client();

const Discord5 = require('discord.js');
const bot5 = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}.`);
  bot.user.setStatus('invisible')
});

bot1.on('ready', () => {
  console.log(`Logged in as ${bot1.user.tag}.`);
  bot1.user.setStatus('invisible')
});

bot3.on('ready', () => {
  console.log(`Logged in as ${bot3.user.tag}.`);
  bot3.user.setStatus('invisible')
});

bot4.on('ready', () => {
  console.log(`Logged in as ${bot4.user.tag}.`);
  bot4.user.setStatus('visible')
});

bot5.on('ready', () => {
  console.log(`Logged in as ${bot5.user.tag}.`);
  bot5.user.setStatus('visible')
});
//bot2.on('ready', () => {
  //console.log(`Logged in as ${bot2.user.tag}.`);
  //bot2.user.setStatus('idle')
//});


//
// //res
// bot2.on('message', message=>{
//   if (message.channel.id === ('400637579004739587')){
//
//
// bot1.channels.get('404739782711705601').send(message.author.tag) ;
// bot1.channels.get('404739782711705601').send(message.createdAt) ;
// bot1.channels.get('404739782711705601').send(message.content) ;
//
// }
// });
//
// bot2.on('message', message=>{
//   if (message.channel.id === ('400637736224161792')){
//
//
// bot1.channels.get('404739847522222080').send(message.author.tag) ;
// bot1.channels.get('404739847522222080').send(message.createdAt) ;
// bot1.channels.get('404739847522222080').send(message.content) ;
//
// }
// });
//
//
// //snake
//
// bot2.on('message', message=>{
//   if (message.channel.id === ('376042191358787588')){
//
//
// bot1.channels.get('404740243753926667').send(message.author.tag) ;
// bot1.channels.get('404740243753926667').send(message.createdAt) ;
// bot1.channels.get('404740243753926667').send(message.content) ;
//
// }
// });
//
// bot.on('message', message=>{
//   if (message.channel.id === ('404011874963816460')){
//
//
// bot1.channels.get('409098980677517312').send(message.author.tag) ;
// bot1.channels.get('409098980677517312').send(message.createdAt) ;
// bot1.channels.get('409098980677517312').send(message.content) ;
//
// }
// });


// bot.on('message', message=>{
  //if (message.channel.id === ('434457713280417803')){
//if (message.author.bot) return;
 //bot1.channels.get('434468014302167051').send(message.author.tag) ;
 //bot1.channels.get('434468014302167051').send(message.createdAt) ;
 //bot1.channels.get('434468014302167051').send(message.content) ;

//}
 //});


 //bot.on('message', message=>{
//  if (message.channel.id === ('434457730808414220')){
//if (message.author.bot) return;
// bot1.channels.get('434467995453227018').send(message.author.tag) ;
// bot1.channels.get('434467995453227018').send(message.createdAt) ;
// bot1.channels.get('434467995453227018').send(message.content) ;

//}
 //});

 //bot.on('message', message=>{
 //if (message.channel.id === ('434456342967877635')){
//if (message.author.bot) return;

 //bot1.channels.get('434467953195614209').send(message.author.tag) ;
 //bot1.channels.get('434467953195614209').send(message.createdAt) ;
 //bot1.channels.get('434467953195614209').send(message.content) ;

//}
 //});


 //bot.on('message', message=>{
 //if (message.channel.id === ('434540862790434838')){
//if (message.author.bot) return;

 //bot1.channels.get('516317839213199400').send(message.author.tag) ;
 //bot1.channels.get('516317839213199400').send(message.createdAt) ;
 //bot1.channels.get('516317839213199400').send(message.content) ;

//}
 //});

// bot.on('message', message=>{
 //if (message.channel.id === ('507709853364518924')){
 //if (message.author.bot) return;

 //bot1.channels.get('516321627630338074').send(message.author.tag) ;
 //bot1.channels.get('516321627630338074').send(message.createdAt) ;
 //bot1.channels.get('516321627630338074').send(message.content) ;

 //}
 //});




 bot.on('message', message=>{
      if (message.channel.id === ('507709853364518924')){
    if (message.author.bot) return;

     var embed = new Discord.RichEmbed()
       .setAuthor(message.author.tag,message.author.avatarURL)
       .setDescription(message.content)
       .setColor("#0029fc");
       bot1.channels.get('516317839213199400').send(embed);
    }
    });

    bot.on('message', message=>{
         if (message.channel.id === ('434540862790434838')){
       if (message.author.bot) return;

        var embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(message.content)
          .setColor("#0029fc");
          bot1.channels.get('516321627630338074').send(embed);
       }

});

bot.on('message', message=>{
     if (message.channel.id === ('516273333336014850')){
   if (message.author.bot) return;

    var embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag,message.author.avatarURL)
      .setDescription(message.content)
      .setColor("#0029fc");
      bot1.channels.get('516332754380521504').send(embed);
   }

});




bot.on('message', message=>{
     if (message.channel.id === ('512795405055164427')){
   if (message.author.bot) return;

    var embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag,message.author.avatarURL)
      .setDescription(message.content)
      .setColor("#0029fc");
      bot1.channels.get('516339474117033990').send(embed);
   }

});


bot.on('message', message=>{
     if (message.channel.id === ('516149973612494853')){
   if (message.author.bot) return;

    var embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag,message.author.avatarURL)
      .setDescription(message.content)
      .setColor("#0029fc");
      bot1.channels.get('516339474117033990').send(embed);
   }

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



//bot.on('message', message=>{
     //if (message.channel.id === ('517388015442853889')){
   //if (message.author.bot) return;

  //  var embed = new Discord.RichEmbed()
  //    .setAuthor(message.author.tag,message.author.avatarURL)
  //    .setDescription(message.content)
  //    .setColor("#0029fc");
  //    bot1.channels.get('517518083598843905').send(embed);
  // }

//});




//bot2.on('message', message=>{
//if (message.channel.type === 'dm') {
//bot1.channels.get('404740412994224159').send(message.author.tag) ;
//bot1.channels.get('404740412994224159').send(message.createdAt) ;
//bot1.channels.get('404740412994224159').send(message.content) ;
//}
//});

bot2.on('error', console.error);
bot.on('error', console.error);

bot.login('MjQ2MzI3MDE2NzA4NzY3NzQ0.DLnV-g.zbVrOxNW_xGwfaRJlOPjmtB-Tw0');
//bot2.login('MjMxOTM2ODAzNjUxODQ2MTQ0.DTj51Q.6KhsdZzfdwCjaFLXDIWiL4t5sBg');
//bot1.login('Mzg0NDA4NzIxMTY3NzQ1MDMw.DTp3Qw.rooy8cFHoAunmeU4QQB8-yoOkgE');
//bot3.login("MTQxOTg4NzQyNjg3NjIxMTIw.DbK1AA.7Sqm1yL5mN8jpSzx2zj5fB_4rDk");
bot1.login("NDI3MzAzMjA3NDYzNTUwOTc2.DZis6Q.Phbf3U0qredBkRoNYndNBZbLzKE")
bot3.login("MzQ4MTQ4NjQ4MzI2MDcwMjc0.Dd9_ZA.TTQNrL0sk12jda7pvNbV8zsGcDM")

bot4.login("NTE2MzM5NzQyMzA5MzUxNDM1.DtyOhQ.MnZKOwLVBAqnny6U0J9h43Qj0mg")

bot5.login("NDI3MzAzMjA3NDYzNTUwOTc2.DvAVOg.tqtgonXg8-_7DQ5QeLUMI5kCyLA")
