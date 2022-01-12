exports.run = async(client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return;
  var rol = message.mentions.roles.first()
  if(!rol) message.channel.send("Lütfen bir rol belirtin.")
  message.guild.members.cache.forEach(arez => arez.roles.add(rol.id))
  return message.channel.send(`Herkese \`${rol.id}\` İd'li rol veriliyor. Bu işlem sunucunuzun büyüklüğüne bağlı olarak zaman alabilir.`)
}
exports.conf = {aliases: [], permlvl: 0}
exports.help = {name: `herkeserolver`}  
