const Discord = require("discord.js");

exports.run = (bot, message, args) => {

  const embed = new Discord.RichEmbed()
    .setColor(0x800040)
    .setImage(url='https://image.ibb.co/fnNZg9/imloveu.jpg')
  message.channel.send("" + message.author.toString() + " :heart: " + message.mentions.members.first() + "", embed);

}
