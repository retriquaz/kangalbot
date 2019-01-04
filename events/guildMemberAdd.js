const Discord = require("discord.js");
module.exports = (bot, member) => {
 const genel = member.guild.channels.find(channel => channel.name === "tantuni-sohbet-odası");
 if(genel){
 genel.send(`<@${member.user.id}> Hoşgeldin Bıremın`);
 }
}