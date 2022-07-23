const { EmbedBuilder } = require('discord.js');
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;



exports.run = (bot, message, args) => {

  if (message.content !== "kb kangal"){
   return
  }

  else{

  function randomKangal() {
  	return bot.config.rando_kangal[Math.floor(Math.random() * bot.config.rando_kangal.length)];
  };
   il.add(randomKangal, []);
     il.run();  //Random Kangal

  const embed = new EmbedBuilder()
    .setTitle('Kangal Türün')
    .setColor(0x0505fa)
    .setDescription(' ')
    .setImage(url= randomKangal())
  message.reply({content: "" + message.author.toString() + " Hırrrrr.", embeds: [embed]});

 }
}
