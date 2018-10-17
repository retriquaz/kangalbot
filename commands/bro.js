const Discord = require("discord.js");

exports.run = (bot, message, args) => {

  const embed = new Discord.RichEmbed()
    .setColor(0x8080c0)
    .setImage(url='https://image.ibb.co/bvrkM9/bro.jpg')
  message.channel.send(" Broooooooooooooo", embed);

}
