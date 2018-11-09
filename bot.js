const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
var fs = require('fs');
bot.setMaxListeners(0);

var rando_kangal = config.rando_kangal;
var rando_shiba = config.rando_shiba;
var rando_dog = config.rando_dog;
var rando_cevap = config.rando_cevap;
var rando_samoyed = config.rando_samoyed;
var prefix = config.prefix;
var prefix2 = config.prefix2;
var prefix3 = config.prefix3;
var prefix4 = config.prefix4;
var prefix5 = config.prefix5;
var helplist = fs.readFileSync('./help.txt', 'utf8');
var updates = fs.readFileSync('./updates.txt', 'utf8');
var akbaş = fs.readFileSync('./dogs/akbas.txt', 'utf8');
var alabay = fs.readFileSync('./dogs/alabay.txt', 'utf8');
var açk = fs.readFileSync('./dogs/ack.txt', 'utf8');
var bulldog = fs.readFileSync('./dogs/bulldog.txt', 'utf8');
var chihuahua = fs.readFileSync('./dogs/chihuahua.txt', 'utf8');
var doberman = fs.readFileSync('./dogs/doberman.txt', 'utf8');
var golden = fs.readFileSync('./dogs/golden.txt', 'utf8');
var haski = fs.readFileSync('./dogs/haski.txt', 'utf8');
var kçk = fs.readFileSync('./dogs/kck.txt', 'utf8');
var kangal = fs.readFileSync('./dogs/kangal.txt', 'utf8');
var komondor = fs.readFileSync('./dogs/komondor.txt', 'utf8');
var labrador = fs.readFileSync('./dogs/labrador.txt', 'utf8');
var malaklı = fs.readFileSync('./dogs/malakli.txt', 'utf8');
var pom = fs.readFileSync('./dogs/pom.txt', 'utf8');
var pug = fs.readFileSync('./dogs/pug.txt', 'utf8');
var rottweiler = fs.readFileSync('./dogs/rottweiler.txt', 'utf8');
var shiba = fs.readFileSync('./dogs/shiba.txt', 'utf8');
var shihtzu = fs.readFileSync('./dogs/shih-tzu.txt', 'utf8');

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
   il.run();     //random Shiba

function randomDog() {
  return rando_dog[Math.floor(Math.random() * rando_dog.length)];
};
 il.add(randomDog, []);
   il.run();    //random Dog

function randomCevap() {
	return rando_cevap[Math.floor(Math.random() * rando_cevap.length)];
};
 il.add(randomCevap, []);
	 il.run();  //Random Cevap

function randomSamoyed() {
	return rando_samoyed[Math.floor(Math.random() * rando_samoyed.length)];
};
	il.add(randomSamoyed, []);
	 il.run();  //

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
  if (message.content === config.prefix + 'help') return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "help" || tag == ''){
    const embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
			.setThumbnail(url='https://cdn.discordapp.com/attachments/453476121078661120/500399543267885066/logo.png')
			.setAuthor("KangalBot", "https://cdn.discordapp.com/avatars/484411378556338179/62f4ef653ecb1d495eca978ff1ebd781.png?size=128")
			.setFooter("İçin Oluşturuldu", message.author.avatarURL)
			.setTimestamp()
	    .setDescription(helplist)
    message.channel.send("666 Kangal Yardım Hattı. " + message.author.toString() + " Size Nasıl Yardımcı Olabiliriz.", embed);
   }
  }
 });   //help

bot.on('message', message => {
	 if (message.content === config.prefix) return;
   if (message.content === config.prefix2) return;
   if (message.author.bot) return;
   if (message.content.startsWith(config.prefix2)) {
   let tag = message.content.slice(config.prefix2.length).trim().split(/ +/g)
     if(tag = message.mentions ){
     const embed = new Discord.RichEmbed()
       .setColor(0xf79209)
       .setImage(url='https://image.ibb.co/fpswDU/21078587_1935285820092402_2203859633689273953_n.jpg')
     message.channel.send("" + message.mentions.members.first() + " Excuse me, WTF", embed);
    }
   }
 });   //wtf

bot.on('message', message => {
	if (message.content === config.prefix) return;
  if (message.content === config.prefix + 'kangal') return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "kangal" || tag == ''){

			const embed = new Discord.RichEmbed()
        .setTitle('Kangal Türün')
        .setColor(0x0505fa)
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
        .setColor(0x0505fa)
        .setDescription('')
        .setImage(url= randomShiba())
      message.channel.send("" + message.author.toString() + " Abime Bir Shiba Gönderin..", embed);

    };
    }
});  //Shiba

bot.on('message', message => {
	if (message.content === config.prefix) return;
  if (message.content === config.prefix + 'samoyed') return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "samoyed" || tag == ''){

			const embed = new Discord.RichEmbed()
        .setTitle('Samoyedcikler')
        .setColor(0x12c409)
        .setDescription('')
        .setImage(url= randomSamoyed())
      message.channel.send("" + message.author.toString() + " Helloooooooo.", embed);

     };

    }
  }); //samoyed

bot.on('message', message => {
	if (message.content === config.prefix) return;
  if (message.content === config.prefix + 'dog') return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "dogs" || tag == ''){

			const embed = new Discord.RichEmbed()
        .setTitle('Rastgele Köpek Türü')
        .setColor(0x68923a)
        .setDescription('')
        .setImage(url= randomDog())
      message.channel.send("" + message.author.toString() + " Hırrrrr.", embed);

     };

    }
  }); //dogs

bot.on('message', message => {
		if (message.content === config.prefix3) return;
	  if (message.author.bot) return;
	  if (message.content.startsWith(config.prefix3)) {
	  let tag = message.content.slice(config.prefix3.length).trim().split(/ +/g)
	    if(tag == "akbaş" || tag == ''){
	    const embed = new Discord.RichEmbed()
	      .setTitle('Akbaş')
	      .setColor(920390)
	      .setDescription(akbaş)
	      .setImage(url='https://image.ibb.co/ckGkcz/akba.jpg')
	    message.channel.send(embed);
	   }
		 if(tag == "açk" || tag == ''){
		 const embed = new Discord.RichEmbed()
			 .setTitle('Anadolu Çoban Köpeği')
			 .setColor(920390)
			 .setDescription(açk)
			 .setImage(url='https://image.ibb.co/g68WHz/anadolu_oban_k_pe_i.png')
		 message.channel.send(embed);
		}
		if(tag == "alabay" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Alabay')
			.setColor(920390)
			.setDescription(alabay)
			.setImage(url='https://image.ibb.co/eoxrHz/alabay.jpg')
		message.channel.send(embed);
	  }
		if(tag == "bulldog" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Bulldog')
			.setColor(920390)
			.setDescription(bulldog)
			.setImage(url='https://image.ibb.co/dNZhPe/bulldog.jpg')
		message.channel.send(embed);
		}
		if(tag == "chihuahua" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Chihuahua')
			.setColor(920390)
			.setDescription(chihuahua)
			.setImage(url='https://image.ibb.co/j4Oyxz/chihuahua.jpg')
		message.channel.send(embed);
		}
		if(tag == "doberman" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Doberman')
			.setColor(920390)
			.setDescription(doberman)
			.setImage(url='https://image.ibb.co/ntfBHz/doberman.jpg')
		message.channel.send(embed);
		}
		if(tag == "golden" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Golden')
			.setColor(920390)
			.setDescription(golden)
			.setImage(url='https://image.ibb.co/mdpSqK/golden_retriever_kopek_8.jpg')
		message.channel.send(embed);
		}
		if(tag == "haski" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Haski')
			.setColor(920390)
			.setDescription(haski)
			.setImage(url='https://image.ibb.co/nKJsPe/sibira_kurdu.png')
		message.channel.send(embed);
		}
		if(tag == "kangal" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Kangal')
			.setColor(920390)
			.setDescription(kangal)
			.setImage(url='https://image.ibb.co/ejKGje/kangal.jpg')
		message.channel.send(embed);
		}
		if(tag == "kçk" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Kafkas Çoban Köpeği')
			.setColor(920390)
			.setDescription(kçk)
			.setImage(url='https://image.ibb.co/cvkBHz/kafkas_oban_k_pe_i.jpg')
		message.channel.send(embed);
		}
		if(tag == "komondor" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Komondor')
			.setColor(920390)
			.setDescription(komondor)
			.setImage(url='https://image.ibb.co/mqFp4e/komondor.jpg')
		message.channel.send(embed);
		}
		if(tag == "labrador" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Labrador')
			.setColor(920390)
			.setDescription(labrador)
			.setImage(url='https://image.ibb.co/kpHQcz/labrador.jpg')
		message.channel.send(embed);
		}
		if(tag == "malaklı" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Malaklı')
			.setColor(920390)
			.setDescription(malaklı)
			.setImage(url='https://image.ibb.co/mtL0AK/malakl.gif')
		message.channel.send(embed);
		}
		if(tag == "pom" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Pom')
			.setColor(920390)
			.setDescription(pom)
			.setImage(url='https://image.ibb.co/iTMwje/pom.jpg')
		message.channel.send(embed);
		}
		if(tag == "pug" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Pug')
			.setColor(920390)
			.setDescription(pug)
			.setImage(url='https://image.ibb.co/hGp5cz/pug.jpg')
		message.channel.send(embed);
		}
		if(tag == "rottweiler" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Rottweiler')
			.setColor(920390)
			.setDescription(rottweiler)
			.setImage(url='https://image.ibb.co/nQEtVK/rottweiler.jpg')
		message.channel.send(embed);
		}
		if(tag == "shiba" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Shiba')
			.setColor(920390)
			.setDescription(shiba)
			.setImage(url='https://image.ibb.co/jOHDVK/shiba.png')
		message.channel.send(embed);
		}
		if(tag == "shih-tzu" || tag == ''){
		const embed = new Discord.RichEmbed()
			.setTitle('Shih Tzu')
			.setColor(920390)
			.setDescription(shihtzu)
			.setImage(url='https://image.ibb.co/mVe27z/Shih_Tzu_On_White_05.jpg')
		message.channel.send(embed);
		}
	 }
	}); //bilgi

bot.on('message', message => {
	 if(message.content.toLowerCase() === 'slayerblue'){
	    message.channel.send("<@361552512165347329> = Amına koduğumun ruh hastası.",{
    file: "https://image.ibb.co/hc7oQU/Ads_z.jpg"
	})
  }
}) //slayerblue

bot.on('message', message => {
	message.content = message.content.toLowerCase();
	if (message.content === "kangal help") return;
  if (message.content === "kangal"){

		message.reply("ne var hAv")

	}

	else

	if (message.content.startsWith("kangal ")) {

				  message.reply(randomCevap())

	 }
});//randomCevap

bot.on('message', message => {
	 if (message.content === config.prefix) return;
   if (message.content === config.prefix4) return;
   if (message.author.bot) return;
   if (message.content.startsWith(config.prefix4)) {
   let tag = message.content.slice(config.prefix4.length).trim().split(/ +/g)
     if(tag = message.mentions ){
     const embed = new Discord.RichEmbed()
       .setColor(0x800040)
       .setImage(url='https://image.ibb.co/fnNZg9/imloveu.jpg')
     message.channel.send("" + message.author.toString() + " :heart: " + message.mentions.members.first() + "", embed);
  }
 }
});   //love

bot.on('message', message => {
	 if (message.content === config.prefix) return;
   if (message.content === config.prefix5) return;
   if (message.author.bot) return;
   if (message.content.startsWith(config.prefix5)) {
   let tag = message.content.slice(config.prefix5.length).trim().split(/ +/g)
     if(tag = message.mentions ){
     const embed = new Discord.RichEmbed()
       .setColor(0x8080c0)
       .setImage(url='https://image.ibb.co/bvrkM9/bro.jpg')
     message.channel.send(" Broooooooooooooo", embed);
  }
 }
});   //bro

bot.on('message', message => {
	if (message.content === config.prefix) return;
  if (message.content === config.prefix + 'updates') return;
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
  let tag = message.content.slice(config.prefix.length).trim().split(/ +/g)
    if(tag == "updates" || tag == ''){
      const embed = new Discord.RichEmbed()
        .setColor(0xc0c0c0)
        .setDescription(updates)
      message.author.send("" + message.author.toString() + " Şekil oldum karşimm.", embed);

    };
    }
});  //updates

bot.on('ready', () => {
     bot.user.setActivity('Finolarla');
     console.log('Bot Hazır');
});    // bot hazır ve bot oyunu

bot.login(process.env.BOT_TOKEN)//process.env.BOT_TOKEN
