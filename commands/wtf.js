const { EmbedBuilder } = require('discord.js');

exports.run = (bot, message, args) => {
    if (message.channel.type == "dm"){

	  message.reply("Bu komut dm den kullanıma açık değildir.")

    }
  else if(!message.content.startsWith("kb ")){
      return;
    }
  else if(message.content === "kb wtf"){

    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb wtf @TAG`")

    }
  else if(message.content.includes("<@&")){
      message.reply("OOOO delikanlı sakin ol ROL Etiketlemeye izin yok.")
      }
  else if(message.content.includes("<@")){
  const embed = new EmbedBuilder()
    .setColor(0xf79209)
    .setImage(url='https://i.pinimg.com/originals/ec/60/fa/ec60fa3873641e7125aa408de97ee67e.jpg')
    .setFooter({text: "İçin Oluşturuldu", iconURL: message.member.displayAvatarURL()})
    .setTimestamp()
  message.reply({content: "" + message.mentions.users.first().toString() + " Excuse me, WTF", embeds: [embed]});
}else {
    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb wtf @TAG`")
}
}
