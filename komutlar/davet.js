const  HakanDiscord = require('discord.js');
const  HakanClient = new HakanDiscord.Client();
exports.run = (client, message) => {
  const  HakanEmbed = new HakanDiscord.MessageEmbed();
   HakanEmbed.setColor(0x36393F)
   HakanEmbed.setDescription(`<a:siyah_tac:930082414217293894> Plover Botu Davet Etmek İçin [Buraya](https://discord.com/api/oauth2/authorize?client_id=921149728626987049&permissions=362842&scope=bot) Tıklayabilirsin!
<a:yildiz:930077125216710687> Eğer Destek Sunucuma Gelmek İstersen [Buradan](https://discord.gg/W2CbWUDsha) Gelebilirsin!!
<a:yildiz:930077125216710687> Plover Bot Hakkında Ekstra Bilgi Öğrenmek İstiyorsan **.bilgi** Yaz!!`)

  message.channel.send(HakanEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','invite','d'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};