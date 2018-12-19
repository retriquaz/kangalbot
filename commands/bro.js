const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  if(!message.content.startsWith("kb ")){
      return;
    }
  else if(message.content === "kb bro"){

    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb bro @TAG`")

    } else {
  const embed = new Discord.RichEmbed()
    .setColor(0x8080c0)
    .setImage(url='https://image.ibb.co/bvrkM9/bro.jpg')
    .setFooter("İçin Oluşturuldu", message.author.avatarURL)
    .setTimestamp()
  message.channel.send(" Broooooooooooooo " + message.mentions.members.first() + " I Love You Bro <3" , embed);
}
}
