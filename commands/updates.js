const Discord = require("discord.js");

exports.run = (bot, message, args) => {

  if (message.content !== "kb updates"){
   return
  }

  else{
  const embed = new Discord.RichEmbed()
    .setColor(0xc0c0c0)
    .setDescription(bot.updates)
  message.author.send("" + message.author.toString() + " Şekil oldum karşimm.", embed);

 }
}
