const Discord = require("discord.js");

exports.run = (bot, message, args) => {

  const embed = new Discord.RichEmbed()
    .setColor(0xf79209)
    .setImage(url='https://cdn.discordapp.com/attachments/468301293581107201/500679873405124628/43952755_10157458613873492_7998499023902212096_n.png')
  message.channel.send("" + message.mentions.members.first() + " Excuse me, WTF", embed);

}
