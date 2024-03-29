//import db from '../lib/database.js'

let handler = async (m, { conn }) => {

  let hasil = Math.floor(Math.random() * 5000)
  let time = global.db.data.users[m.sender].lastcose + 14400000
  if (new Date - global.db.data.users[m.sender].lastcose < 14400000) throw `⏳ _Espera_ *${msToTime(time - new Date())}* _para regresar a cosechar_`
  global.db.data.users[m.sender].exp += hasil
  m.react('🚜')
  m.reply(`
🎉 Genial! Mientras cosechabas en tu huerto encontraste *${hasil} XP*`)
  global.db.data.users[m.sender].lastcose = new Date * 1
}
handler.help = ['cosechar']
handler.tags = ['econ']
handler.command = ['cosechar', 'Cosechar', 'cose'] 

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds
 

  return hours + " hora(s) " + minutes + " minuto(s) " + seconds + " segundo(s)" 
}
