import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m) => {
let motivasii = pickRandom(global.motivacion)
    await conn.reply(m.chat, motivasii, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: 'ＭＯＴＩＶＡＣＩＯＮ （^_^）', 
    body: 'Lee son Buenas😉',  
    sourceUrl: "", 
    thumbnailUrl: "https://i.ibb.co/xHqPNmQ/20230627-231554.jpg",
      }}
     })
}
handler.help = ['motivacion']
handler.tags = ['fun']
handler.command = /^(motivacion)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.motivacion = [
"AJAJ se que dije que leas pero aun el comando no esta terminado regresa mas tarde :3 Mua.",
]
