const { EmbedBuilder } = require('discord.js');
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;



exports.run = (bot, message, args) => {

  if (message.content !== "kb shiba"){
   return
  }

 else{

   message.reply("Kangali sebeplerden ötürü devre dışı")

  // function randomShiba() {
  //  return bot.config.rando_shiba[Math.floor(Math.random() * bot.config.rando_shiba.length)];
  // };
  //  il.add(randomShiba, []);
  //    il.run();     //random Shiba
  //
  // const embed = new EmbedBuilder()
  //   .setTitle("İbo'dan Seçme Shibalar")
  //   .setColor(0xee93e0)
  //   .setDescription(' ')
  //   .setImage(url= randomShiba())
  // message.channel.send({content: "" + message.author.toString() + " Abime Bir Shiba Gönderin..", embeds: [embed]});

 }
}
