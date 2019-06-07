module.exports = (bot) => {
  bot.user.setActivity('Finolarla');
  console.log('Bot Hazır');
  const genel = bot.channels.find(channel => channel.name === "tantuni-sohbet-odası");
  if(genel){
  genel.send("Geri Döndüm PAMPA hemen `kb updates` ile neler yeni kontrol et.")
  }
}
