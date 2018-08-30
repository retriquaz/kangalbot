const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
var fs = require('fs');

var helplist = fs.readFileSync('./help.txt', 'utf8')
var rando_kangal = config.rando_kangal;
var rando_shiba = config.rando_shiba
var prefix = config.prefix;

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomKangal() {
	return rando_kangal[Math.floor(Math.random() * rando_kangal.length)];
};
 il.add(randomKangal, []);
   il.run();  //Random Kangal


function randomShiba() {
 return rando_shiba[Math.floor(Math.random() * rando_shiba.length)];
};
 il.add(randomShiba, []);

 il.run();     //randomShiba  // Random Shiba

//////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
    if(message.content.toLowerCase() === 'hav'){
      message.reply('Hırrrrr')
    }
}) //hav hırrr

bot.on('message', message => {
     if(message.content.toLowerCase() === 'anime'){
       message.reply('Anime = Çizgi Film')
     }
  });  //anime çizgi film

bot.on('message', message => {
  if (message.content === config.prefix) return;
  if (message.content === config.prefix + 'help') return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "help" || tag == ''){
    const embed = new Discord.RichEmbed()
      .setTitle('Komutlar')
      .setColor(0xFF0000)
      .setDescription(helplist)
      .setImage(url='https://www.desktopbackground.org/p/2015/12/30/1065400_redhead-wallpapers-dump-album-on-imgur_1920x1080_h.jpg')
    message.channel.send("666 Kangal Yardım Hattı. " + message.author.toString() + " Size Nasıl Yardımcı Olabiliriz.", embed);
   }
  }
 });   //help

bot.on('message', message => {
  if (message.content === config.prefix) return;
  if (message.content === config.prefix + 'kangal') return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "kangal" || tag == ''){

			const embed = new Discord.RichEmbed()
        .setTitle('Kangallık Seviyen')
        .setColor(800080)
        .setDescription('')
        .setImage(url= randomKangal())
      message.channel.send("" + message.author.toString() + " Hırrrrr.", embed);

     };

    }
  }); //kangal

bot.on('message', message => {
  if (message.content === config.prefix) return;
  if (message.content === config.prefix + 'shiba') return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "shiba" || tag == ''){
      const embed = new Discord.RichEmbed()
        .setTitle("İbo'dan Seçme Shibalar")
        .setColor(835289)
        .setDescription('')
        .setImage(url= randomShiba())
      message.channel.send("" + message.author.toString() + " Abime Bir Shiba Gönderin..", embed);

    };
    }
});  //Shiba


bot.on('ready', () => {
     bot.user.setActivity('Finolarla');
     console.log('Bot Hazır');
});    // bot hazır ve bot oyunu

bot.login(process.env.BOT_TOKEN)
