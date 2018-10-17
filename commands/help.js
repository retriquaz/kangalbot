const Discord = require("discord.js");

exports.run = (bot, message, args) => {


  const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setThumbnail(url='https://cdn.discordapp.com/attachments/453476121078661120/500399543267885066/logo.png')
    .setAuthor("KangalBot", "https://cdn.discordapp.com/avatars/484411378556338179/62f4ef653ecb1d495eca978ff1ebd781.png?size=128")
    .setFooter("İçin Oluşturuldu", message.author.avatarURL)
    .setTimestamp()
    .setDescription(bot.helplist)
  message.channel.send("666 Kangal Yardım Hattı. " + message.author.toString() + " Size Nasıl Yardımcı Olabiliriz.", embed);


}
