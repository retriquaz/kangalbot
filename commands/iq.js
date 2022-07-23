const { EmbedBuilder } = require('discord.js');
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

exports.run = (bot, message, args) => {


var min = 0;
var max = 10;
var num = Math.floor(Math.random() * (max - min + 1)) + min;

if (message.content !== "kb iq"){
 return
}else if(message.author.id === bot.config.ownerId2){

	const embed = new EmbedBuilder()
   .setColor(0xFF0000)
   .setThumbnail(url='https://cdn.discordapp.com/attachments/453476121078661120/500399543267885066/logo.png')
   .setAuthor({name: "KangalBot", iconURL: "https://cdn.discordapp.com/avatars/484411378556338179/62f4ef653ecb1d495eca978ff1ebd781.png?size=128"})
   .setFooter({text: "İçin Oluşturuldu", iconURL: message.member.displayAvatarURL()})
   .setTimestamp()
   .setDescription("Hırrrrrrrrrrrrrrr. " + message.author.toString() + " Bence Senin IQ'un\n \n **10**")
 message.reply({embeds: [embed]});

}else if(message.author.id === bot.config.ownerId1){

	const embed = new EmbedBuilder()
   .setColor(0xFF0000)
   .setThumbnail(url='https://cdn.discordapp.com/attachments/453476121078661120/500399543267885066/logo.png')
   .setAuthor({name: "KangalBot", iconURL: "https://cdn.discordapp.com/avatars/484411378556338179/62f4ef653ecb1d495eca978ff1ebd781.png?size=128"})
   .setFooter({text: "İçin Oluşturuldu", iconURL: message.member.displayAvatarURL()})
   .setTimestamp()
   .setDescription("Hırrrrrrrrrrrrrrr. " + message.author.toString() + " Bence Senin IQ'un\n \n **10**")
 message.reply({embeds: [embed]});

}else{

 const embed = new EmbedBuilder()
   .setColor(0xFF0000)
   .setThumbnail(url='https://cdn.discordapp.com/attachments/453476121078661120/500399543267885066/logo.png')
   .setAuthor({name: "KangalBot", iconURL: "https://cdn.discordapp.com/avatars/484411378556338179/62f4ef653ecb1d495eca978ff1ebd781.png?size=128"})
   .setFooter({text: "İçin Oluşturuldu", iconURL: message.member.displayAvatarURL()})
   .setTimestamp()
   .setDescription("Hırrrrrrrrrrrrrrr. " + message.author.toString() + " Bence Senin IQ'un\n \n **"+ num +"**")
 message.reply({embeds: [embed]});
 }
}
