const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**Bu komutu kullanmak için \`Mesajları Yönet\` yetkisine sahip olmalısın!**`);
  if (!args[0])
    return message.channel.send(
      "**:no_entry: Sa-as yazısını açmak için; 'sa-as aç veya kapat'**"
    );

  if (args[0] == "aç") {
    db.set(`saas_${message.guild.id}`, "açık");
    message.channel.send(
      `**Sa-as sistemi başarıyla açıldı! Kapatmak için 'sa-as kapat' yazmalısın.**`
    );
  }

  if (args[0] == "kapat") {
    db.set(`saas_${message.guild.id}`, "kapali");
    message.channel.send(`**Başarıyla sa-as sistemi kapatıldı!**`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sa-as",
  description: "Bot size selam verir",
  usage: ""
};
