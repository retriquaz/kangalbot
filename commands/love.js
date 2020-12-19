const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if (message.channel.type == "dm"){
	  
	  message.reply("Bu komut dm den kullanıma açık değildir.")
	  
    }
  else if(!message.content.startsWith("kb ")){
      return;
    }
  else if(message.content === "kb love"){

    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb love @TAG`")

    } else {
  const embed = new Discord.RichEmbed()
    .setColor(0x800040)
    .setImage(url='https://image.ibb.co/fnNZg9/imloveu.jpg')
  message.channel.send("" + message.author.toString() + " :heart: " + message.mentions.users.first() + "", embed);
}
}
