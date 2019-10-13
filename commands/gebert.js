const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  if (message.channel.type == "dm"){
	  return;
    }
  else if(!message.content.startsWith("kb ")){
      return;
    }
  else if(message.content === "kb gebert"){

    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb gebert @TAG`")

    } else {
  const embed = new Discord.RichEmbed()
    .setColor(0x1752220)
    .setImage(url='https://i.hizliresim.com/5Nzl4R.png')
  message.channel.send("" + message.author.toString() + " :coffin: " + message.mentions.members.first() + "", embed);
}
}
