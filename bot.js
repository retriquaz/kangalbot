const Discord = require('discord.js');
const bot = new Discord.Client();
const Enmap = require("enmap");
const config = require("./config.json");
bot.config = config;
var fs = require('fs');
bot.setMaxListeners(0);


var prefix = config.prefix;
var helplist = fs.readFileSync('./help.txt', 'utf8');
bot.helplist = helplist;
var updates = fs.readFileSync('./updates.txt', 'utf8');
bot.updates = updates;
var rando_dog = config.rando_dog;
var rando_cevap = config.rando_cevap;
var rando_kangal = config.rando_kangal;
var rando_shiba = config.rando_shiba;
var rando_samoyed = config.rando_samoyed;
var akbaş = fs.readFileSync('./dogs/akbas.txt', 'utf8');
bot.akbaş = akbaş;
var alabay = fs.readFileSync('./dogs/alabay.txt', 'utf8');
bot.alabay = alabay;
var açk = fs.readFileSync('./dogs/ack.txt', 'utf8');
bot.açk = açk;
var bulldog = fs.readFileSync('./dogs/bulldog.txt', 'utf8');
bot.bulldogs = bulldog;
var chihuahua = fs.readFileSync('./dogs/chihuahua.txt', 'utf8');
bot.chihuahua = chihuahua;
var doberman = fs.readFileSync('./dogs/doberman.txt', 'utf8');
bot.doberman = doberman;
var golden = fs.readFileSync('./dogs/golden.txt', 'utf8');
bot.golden = golden;
var haski = fs.readFileSync('./dogs/haski.txt', 'utf8');
bot.haski = haski;
var kçk = fs.readFileSync('./dogs/kck.txt', 'utf8');
bot.kçk = kçk;
var kangal = fs.readFileSync('./dogs/kangal.txt', 'utf8');
bot.kangal = kangal;
var komondor = fs.readFileSync('./dogs/komondor.txt', 'utf8');
bot.komondor = komondor;
var labrador = fs.readFileSync('./dogs/labrador.txt', 'utf8');
bot.labrador = labrador;
var malaklı = fs.readFileSync('./dogs/malakli.txt', 'utf8');
bot.malaklı = malaklı
var pom = fs.readFileSync('./dogs/pom.txt', 'utf8');
bot.pom = pom;
var pug = fs.readFileSync('./dogs/pug.txt', 'utf8');
bot.pug = pug;
var rottweiler = fs.readFileSync('./dogs/rottweiler.txt', 'utf8');
bot.rottweiler = rottweiler;
var shiba = fs.readFileSync('./dogs/shiba.txt', 'utf8');
bot.shiba = shiba;
var shihtzu = fs.readFileSync('./dogs/shih-tzu.txt', 'utf8');
bot.shihtzu = shihtzu;
var pitbull = fs.readFileSync('./dogs/pitbull.txt', 'utf8');
bot.pitbull = pitbull;


var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;


//////////////////////////////////////////////////////////////////////////////////////


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
}); //events

bot.commands = new Enmap();  //enmap

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} Komutu yukleniyor`);
    bot.commands.set(commandName, props);
  });
});  //commands



////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Tantuni Cevap/////////////////////////////////////
bot.on('message', message => {
  if (message.author.bot){
    if (message.content === "Bana Bak <@484411378556338179>"){
      message.reply("Baktım Tantuni Söyle")
    } else if (message.content === 'Eeeeeey <@484411378556338179> Sen kimsin?'){
      message.reply("Anana sor")
    } else if (message.content === '<@484411378556338179> En ağır yerinden vursada hayat, besmele çek ayağa kalk'){
      message.reply("IYI DeDiN GıRaL")
    } else if (message.content === 'hoşt ulan'){
      message.reply("Siktir Hav")
    } else return;
  }
})
//////////////////////////////////////Tantuni Cevap/////////////////////////////////////
bot.on('error', console.error);
bot.login(process.env.BOT_TOKEN)//process.env.BOT_TOKEN
