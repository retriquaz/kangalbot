const Discord = require("discord.js");
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

exports.run = (bot, message, args) => {


var min = 0;
var max = 150;
var num = Math.floor(Math.random() * (max - min + 1)) + min;

if (message.content !== "kb iq"){
 return
}

else{

 const embed = new Discord.RichEmbed()
   .setColor(0xFF0000)
   .setThumbnail(url='https://cdn.discordapp.com/attachments/453476121078661120/500399543267885066/logo.png')
   .setAuthor("KangalBot", "https://cdn.discordapp.com/avatars/484411378556338179/62f4ef653ecb1d495eca978ff1ebd781.png?size=128")
   .setFooter("İçin Oluşturuldu", message.author.avatarURL)
   .setTimestamp()
   .setDescription(num)
 message.channel.send("Hırrrrrrrrrrrrrrr. " + message.author.toString() + " Bence Senin IQ'un ", embed);
 }
}
