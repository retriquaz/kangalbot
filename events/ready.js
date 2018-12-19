module.exports = (bot) => {
  const genel = bot.channels.find(channel => channel.name === "tantuni-sohbet-odası");
  bot.user.setActivity('Finolarla');
  console.log('Bot Hazır');
  genel.send("Geri Döndüm PAMPA hemen `kb updates` ile neler yeni kontrol et.")
}
