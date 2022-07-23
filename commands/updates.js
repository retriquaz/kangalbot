const { EmbedBuilder } = require('discord.js');

exports.run = (bot, message, args) => {

  if (message.content !== "kb updates"){
   return
  }

  else{
  const embed = new EmbedBuilder()
    .setColor(0xc0c0c0)
    .setDescription(bot.updates)
  message.author.send({content: "" + message.author.toString() + " Şekil oldum karşimm.", embeds: [embed]}).catch(error => {
    message.channel.send(`DM atamıyom lan açsana kapıyı it`)
});

 }
}
