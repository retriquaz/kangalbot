const Discord = require("discord.js");
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;



exports.run = (bot, message, args) => {


  function randomKangal() {
  	return bot.config.rando_kangal[Math.floor(Math.random() * bot.config.rando_kangal.length)];
  };
   il.add(randomKangal, []);
     il.run();  //Random Kangal

  const embed = new Discord.RichEmbed()
    .setTitle('Kangal Türün')
    .setColor(0x0505fa)
    .setDescription('')
    .setImage(url= randomKangal())
  message.channel.send("" + message.author.toString() + " Hırrrrr.", embed);


}
