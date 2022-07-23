const { EmbedBuilder } = require('discord.js');

exports.run = (bot, message, args) => {
    if (message.channel.type == "dm"){

	  message.reply("Bu komut dm den kullanıma açık değildir.")

    }
  else if(!message.content.startsWith("kb ")){
      return;
    }
  else if(message.content === "kb bro"){

    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb bro @TAG`")

    }
  else if(message.content.includes("<@&")){
    message.reply("OOOO delikanlı sakin ol ROL Etiketlemeye izin yok.")
    }
  else if(message.content.includes("<@")){
  const embed = new EmbedBuilder()
    .setColor(0x8080c0)
    .setImage(url='https://image.ibb.co/bvrkM9/bro.jpg')
    .setFooter({text: "İçin Oluşturuldu", iconURL: message.member.displayAvatarURL()})
    .setTimestamp()


   message.reply({content:" Broooooooooooooo " + message.mentions.members.first().toString() + " I Love You Bro <3", embeds: [embed] });
  // message.reply(" Broooooooooooooo " + message.mentions.users.first() + " I Love You Bro <3" , embed);
}else {
    message.reply("Birini Etiketlemeniz Lazım\nKullanım `kb bro @TAG`")
}
}
