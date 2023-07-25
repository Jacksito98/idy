import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Estoy muy agradecido con todos ustedes._

┌─⊷ _*THANKS TO*_
➠ Nurutomo
➠ Dylux Fg98
➠ Baileys 
➠ BETABOTZ
➠ BOTCAHX
➠ Hard Ofc
➠ NasXploit
➠ GuhXSenpai
➠ Rehan
➠ GataBot
➠ Scarleh
➠ SIGUEME
└──────────────
`

    let pp = 'https://i.ibb.co/hdXNkbC/thumbnail-robot-nans-offc.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}
handler.customPrefix = /^(tqto|tq|.tqto|.tq)$/i
handler.command = new RegExp

export default handler