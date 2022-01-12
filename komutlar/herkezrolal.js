exports.run = async(client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return;
  var rol = message.mentions.roles.first()
  if(!rol) message.channel.send("Lütfen bir rol belirtin.")
  message.guild.members.cache.forEach(arez => arez.roles.remove(rol.id))
  return message.channel.send(`Herkesten \`${rol.id}\` İd'li rol alınıyor. Bu işlem sunucunuzun büyüklüğüne bağlı olarak zaman alabilir.`)
}
exports.conf = {aliases: [], permlvl: 0}
exports.help = {name: `herkestenrolal`}  
