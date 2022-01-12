const  HakanDiscord = require('discord.js');
const  HakanClient = new HakanDiscord.Client();
exports.run = (client, message) => {
  const  HakanEmbed = new HakanDiscord.MessageEmbed();
   HakanEmbed.setColor(0x36393F)
   HakanEmbed.setDescription(`<a:yildiz:930077125216710687> Galiba Sahibimle İletișime Geçmeye Çalıștın [Buraya](https://discord.com/users/740277871666266143) Tıklayarak Sahibimle İletișime Geçebilirsin!!
<a:yildiz:930077125216710687> Sahibim Hakkında Daha Fazla Bilgi Öğrenmek İstiyorsan [Buraya](https://xhakanz.cf) Tıkla!!
<a:yildiz:930077125216710687> Eğer Benim Hakkımda Bilgi Öğrenmek İstiyorsan **.bilgi** Yaz!!`)
//[bura](https://xhakanz.cf)Daha Fazla Șey Öğrenmek İstiyorsan **.bilgi** Yaz!!`)/// [31](discord.com)`)

 //  (`Sahibim Hakkında Daha Fazla Bilgi Öğrenmek İstiyorsan [Buraya](xhakanz.cf) Tıkla!`) //[Buraya](www.xhakanz.cf) Tıkla!`)

  message.channel.send(HakanEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['iș','ilt','iletișim'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'iletișim',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};