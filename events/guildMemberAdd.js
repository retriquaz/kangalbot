module.exports = (bot, member) => {
 const genel = bot.channels.find(channel => channel.name === "tantuni-sohbet-odası");
  genel.send(`<@${member.user.id}> Hoşgeldin Bıremın`);
}