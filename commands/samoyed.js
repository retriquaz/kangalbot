const { EmbedBuilder } = require('discord.js');
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

exports.run = (bot, message, args) => {

  if (message.content !== "kb samoyed"){
   return
  }

  else{

   message.reply("Kangali sebeplerden ötürü devre dışı")

  // function randomSamoyed() {
  //  return bot.config.rando_samoyed[Math.floor(Math.random() * bot.config.rando_samoyed.length)];
  // };
  //  il.add(randomSamoyed, []);
  //   il.run();  //Random Samoyed
  //
  // const embed = new EmbedBuilder()
  //   .setTitle('Samoyedcikler')
  //   .setColor(0x12c409)
  //   .setDescription(' ')
  //   .setImage(url= randomSamoyed())
  // message.reply({content: "" + message.author.toString() + " Helloooooooo.", embeds: [embed]});

 }
}
