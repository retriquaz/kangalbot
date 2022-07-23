module.exports = (bot) => {
  bot.user.setActivity('Finolarla');
  console.log('Bot Hazır');
  const genel = bot.channels.cache.get('620587159778230276');
  if(genel){
  genel.send('Geri Döndüm PAMPA hemen `kb updates` ile neler yeni kontrol et' )
  }
}
