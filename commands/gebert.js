const { EmbedBuilder } = require('discord.js');

exports.run = (bot, message, args) => {
  if (message.channel.type == "dm"){

	  message.reply("Bu komut dm den kullanıma açık değildir.")

    }
  else if(!message.content.startsWith("kb ")){
      return;
    }
  else if(message.content === "kb gebert"){

    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb gebert @TAG`")

  }
  else if(message.content.includes("<@&")){
      message.reply("OOOO delikanlı sakin ol ROL Etiketlemeye izin yok.")
      }
  else if(message.content.includes("<@")){
  const embed = new EmbedBuilder()
    .setColor(1752220)
    .setImage(url='https://pics.me.me/omae-wa-mou-shindeiru-35864766.png')
  message.reply({content: "" + message.author.toString() + " :coffin: " + message.mentions.users.first().toString() + "", embeds: [embed]});
}else {
  message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb gebert @TAG`")
}
}
