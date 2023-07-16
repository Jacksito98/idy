import { performance } from 'perf_hooks'

let handler = async (m, { conn }) => {

 let start = `💻Comienzo a acelerar... Espere un momento`
 let boost = `${pickRandom(['[▒▒▒▒▒▒▒▒▒▒]'])}`
 let boost2 = `${pickRandom(['[█▒▒▒▒▒▒▒▒▒]','[██▒▒▒▒▒▒▒▒]'])}`
 let boost3 = `${pickRandom(['[██▒▒▒▒▒▒▒▒]','[███▒▒▒▒▒▒▒▒]','[████▒▒▒▒▒▒▒]'])}`
 let boost4 = `${pickRandom(['[██████▒▒▒▒▒▒▒]','[████████▒▒▒▒▒▒]','[████████▒▒▒▒]'])}`
 let boost5 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]'])}`
 let boost6 = `${pickRandom(['*Conection Lost...*','[████████████▒]','[█▒▒▒▒▒▒▒▒▒]'])}`
 let boost7 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]','[████████████]'])}`

   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
   await m.reply(boost4)
   await m.reply(boost5)
   await m.reply(boost6)
   await m.reply(boost7)
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*_Bot acelerado con éxito_*\n\n*_: ${speed} Segundo!_*`

     conn.reply(m.chat, finish,)
}
handler.help = ['boost']
handler.tags = ['main']
handler.command = /^boost|refresh/i


handler.fail = null

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
