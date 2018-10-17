const Discord = require("discord.js");
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

exports.run = (bot, message, args) => {


  function randomSamoyed() {
   return bot.config.rando_samoyed[Math.floor(Math.random() * bot.config.rando_samoyed.length)];
  };
   il.add(randomSamoyed, []);
    il.run();  //Random Samoyed

  const embed = new Discord.RichEmbed()
    .setTitle('Samoyedcikler')
    .setColor(0x12c409)
    .setDescription('')
    .setImage(url= randomSamoyed())
  message.channel.send("" + message.author.toString() + " Helloooooooo.", embed);


}
