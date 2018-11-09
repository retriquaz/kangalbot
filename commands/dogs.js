const Discord = require("discord.js");
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

exports.run = (bot, message, args) => {

  function randomDog() {
    return bot.config.rando_dog[Math.floor(Math.random() * bot.config.rando_dog.length)];
  };
   il.add(randomDog, []);
     il.run();    //random Dog


  let tag = args.slice(0).join(" ");

if (tag == ""){

  const embed = new Discord.RichEmbed()
    .setTitle('Rastgele Köpek Türü')
    .setColor(0x68923a)
    .setDescription('')
    .setImage(url= randomDog())
  message.channel.send("" + message.author.toString() + " Hırrrrr.", embed);
  return;
}


else {
  if(tag == "akbaş" || tag == ''){
  const embed = new Discord.RichEmbed()
    .setTitle('Akbaş')
    .setColor(0x68923a)
    .setDescription(bot.akbaş)
    .setImage(url='https://image.ibb.co/ckGkcz/akba.jpg')
  message.channel.send(embed);
  }
  if(tag == "açk" || tag == ''){
  const embed = new Discord.RichEmbed()
   .setTitle('Anadolu Çoban Köpeği')
   .setColor(0x68923a)
   .setDescription(bot.açk)
   .setImage(url='https://image.ibb.co/g68WHz/anadolu_oban_k_pe_i.png')
  message.channel.send(embed);
  }
  if(tag == "alabay" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Alabay')
  .setColor(0x68923a)
  .setDescription(bot.alabay)
  .setImage(url='https://image.ibb.co/eoxrHz/alabay.jpg')
  message.channel.send(embed);
  }
  if(tag == "bulldog" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Bulldog')
  .setColor(0x68923a)
  .setDescription(bot.bulldog)
  .setImage(url='https://image.ibb.co/dNZhPe/bulldog.jpg')
  message.channel.send(embed);
  }
  if(tag == "chihuahua" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Chihuahua')
  .setColor(0x68923a)
  .setDescription(bot.chihuahua)
  .setImage(url='https://image.ibb.co/j4Oyxz/chihuahua.jpg')
  message.channel.send(embed);
  }
  if(tag == "doberman" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Doberman')
  .setColor(0x68923a)
  .setDescription(bot.doberman)
  .setImage(url='https://image.ibb.co/ntfBHz/doberman.jpg')
  message.channel.send(embed);
  }
  if(tag == "golden" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Golden')
  .setColor(0x68923a)
  .setDescription(bot.golden)
  .setImage(url='https://image.ibb.co/mdpSqK/golden_retriever_kopek_8.jpg')
  message.channel.send(embed);
  }
  if(tag == "haski" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Haski')
  .setColor(0x68923a)
  .setDescription(bot.haski)
  .setImage(url='https://image.ibb.co/nKJsPe/sibira_kurdu.png')
  message.channel.send(embed);
  }
  if(tag == "kangal" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Kangal')
  .setColor(0x68923a)
  .setDescription(bot.kangal)
  .setImage(url='https://image.ibb.co/ejKGje/kangal.jpg')
  message.channel.send(embed);
  }
  if(tag == "kçk" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Kafkas Çoban Köpeği')
  .setColor(0x68923a)
  .setDescription(bot.kçk)
  .setImage(url='https://image.ibb.co/cvkBHz/kafkas_oban_k_pe_i.jpg')
  message.channel.send(embed);
  }
  if(tag == "komondor" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Komondor')
  .setColor(0x68923a)
  .setDescription(bot.komondor)
  .setImage(url='https://image.ibb.co/mqFp4e/komondor.jpg')
  message.channel.send(embed);
  }
  if(tag == "labrador" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Labrador')
  .setColor(0x68923a)
  .setDescription(bot.labrador)
  .setImage(url='https://image.ibb.co/kpHQcz/labrador.jpg')
  message.channel.send(embed);
  }
  if(tag == "malaklı" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Malaklı')
  .setColor(0x68923a)
  .setDescription(bot.malaklı)
  .setImage(url='https://image.ibb.co/mtL0AK/malakl.gif')
  message.channel.send(embed);
  }
  if(tag == "pom" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Pom')
  .setColor(0x68923a)
  .setDescription(bot.pom)
  .setImage(url='https://image.ibb.co/iTMwje/pom.jpg')
  message.channel.send(embed);
  }
  if(tag == "pug" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Pug')
  .setColor(0x68923a)
  .setDescription(bot.pug)
  .setImage(url='https://image.ibb.co/hGp5cz/pug.jpg')
  message.channel.send(embed);
  }
  if(tag == "rottweiler" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Rottweiler')
  .setColor(0x68923a)
  .setDescription(bot.rottweiler)
  .setImage(url='https://image.ibb.co/nQEtVK/rottweiler.jpg')
  message.channel.send(embed);
  }
  if(tag == "shiba" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Shiba')
  .setColor(0x68923a)
  .setDescription(bot.shiba)
  .setImage(url='https://image.ibb.co/jOHDVK/shiba.png')
  message.channel.send(embed);
  }
  if(tag == "shih-tzu" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Shih Tzu')
  .setColor(0x68923a)
  .setDescription(bot.shihtzu)
  .setImage(url='https://image.ibb.co/mVe27z/Shih_Tzu_On_White_05.jpg')
  message.channel.send(embed);
  }
  if(tag == "pitbull" || tag == ''){
  const embed = new Discord.RichEmbed()
  .setTitle('Pitbull')
  .setColor(0x68923a)
  .setDescription(bot.pitbull)
  .setImage(url='https://cdn.discordapp.com/attachments/478617139847364608/500577832414609419/images.jpeg')
  message.channel.send(embed);
  }

};
}
