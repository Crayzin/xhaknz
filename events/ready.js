const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var degisenOynuyor = [
    "Sunucularla İlgileniyor",
    ".yardım",
    "Sahibime Ulașmak İçin .iletișim yaz",
    "Beni Etiketleyerek Hakkımda Daha Çok Șey Öğren"
  //  "https://www.youtube.com/c/yDarKDayS",
   // "v12 Boş Altyapı"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 2000);
  
  client.user.setStatus("idle"); //dnd, idle, online, offline
  //yDarKDayS v12 Boş Altyapı
}