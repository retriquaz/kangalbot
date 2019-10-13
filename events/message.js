const Discord = require("discord.js");
const sigara = "sigara";
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

module.exports = (bot, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  {////////////////////////////////Random cevap/////////////////////////////////
    function randomCevap() {
    	return bot.config.rando_cevap[Math.floor(Math.random() * bot.config.rando_cevap.length)];
    };
     il.add(randomCevap, []);
    	 il.run();  //Random Cevap

  message.content = message.content.toLowerCase();
  if (message.content === "kangal help") return;
  if (message.content === "kangal"){

    message.reply("ne var hAv")

  }

  else

  if (message.content.startsWith("kangal ")) {

          message.reply(randomCevap())

   }
 }//random Cevap
 ////////////////////////////////Random cevap///////////////////////////////////
 ////////////////////////////////Cevaplar///////////////////////////////////////
  if(message.content.toLowerCase() === 'anime'){
    message.reply('Anime = Çizgi Film')
  }; //anime çizgi film

  if(message.content.toLowerCase() === 'slayerblue'){
     message.channel.send("<@361552512165347329> = Amına koduğumun ruh hastası.",{
   file: "https://image.ibb.co/hc7oQU/Ads_z.jpg"
   })
   }//slayerblue

   if(message.content.toLowerCase() === 'hav'){
     message.reply('Hırrrrr')
   }//havv hırrr
   
   if(message.content.toLowerCase() === 'ramiqk'){
	   message.reply("<@452912036670865438> = Amına kodumun orospu çocuuu")
   }//slayerblue
   if(message.content.includes(sigara)){
	   message.channel.send("<@627482377865658378> <3 Cuaracı Reis",{
   file: "https://cdn.discordapp.com/attachments/632886286788591636/632914077575806996/5fb770ebf3536806fb8069bf171fef5c.jpg"
   })
   }//iloş
 ////////////////////////////////Cevaplar///////////////////////////////////////
////////////////////////////////Event Handler///////////////////////////////////
  if (message.content.indexOf(bot.config.prefix) !== 0) return;

  const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = bot.commands.get(command);

  if (!cmd) return;

  cmd.run(bot, message, args);
////////////////////////////////Event Handler///////////////////////////////////
};
