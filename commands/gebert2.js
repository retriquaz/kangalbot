const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  if (message.channel.type == "dm"){
	  
	  message.reply("Bu komut dm den kullanıma açık değildir.")
	  
    }
  else if(!message.content.startsWith("kb ")){
      return;
    }
  else if(message.content === "kb gebert"){

    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb gebert @TAG`")

    } else {
  const embed = new Discord.RichEmbed()
    .setColor(1752220)
    .setImage(url='https://pics.me.me/omae-wa-mou-shindeiru-35864766.png')
  message.channel.send("" + message.author.toString() + " :coffin: " + message.mentions.first() + "", embed);
}
}
