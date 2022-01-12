const Discord = require(`discord.js`)

exports.run = async(client, message)=> {
  
  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
//.setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
 .setDescription(`Buyrun Avatarınız:`)
//.setDescription(`${message.author.tag} adlı kullanıcının avatarı:`)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setTimestamp()
.setColor(`red`)
.setFooter(`Plover Bot`)
message.channel.send(embed)
 } else {
  const embed = new Discord.MessageEmbed()
//.setAuthor(`${message.author.tag} adlı kullanıcının avatarı:`)
  .setDescruption(`Buyrun Avatarınız:`)
 // .setDescription(`${message.author.tag} adlı kullanıcının avatarı:`)
.setImage(message.author.avatarURL({dynamic:true}))
.setTimestamp()
  .setColor(`red`)
.setFooter(`Plover Bot `)
message.channel.send(embed)
 }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["avatar","avatarım","av"],
    permLevel: 0
}

exports.help = {
    name: 'pp',

}