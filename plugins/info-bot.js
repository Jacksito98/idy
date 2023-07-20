import util from 'util'
import path from 'path'
import fs from 'fs'
let handler = async (m, { conn}) => {
await conn.sendMessage(m.chat, { react: { text: '✨', key: m.key } })
let pp = './Menu2.jpg'
let name = conn.getName(m.sender)
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : 69, status: 1, surface : 1, message: '𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍𝕭𝖔𝖙', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
let fgac = [ pp, "adri"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 

conn.sendHydrated(m.chat, `\n𝗛𝗢𝗟𝗔 𝗚𝗔𝗬 *${name}* \n\n*𝗡𝗘𝗖𝗘𝗦𝗜𝗧𝗔𝗦 𝗔𝗬𝗨𝗗𝗔 𝗚𝗜𝗟?* 🤣`, wm, null, 'https://instagram.com/unptoadrih15?igshid=YmMyMTA2M2Y=', 'Sigueme en Instagram', null, null, [ 
      ['⦙☰ Menu', '.help'],
      ['⦙☰ MenuAudios', '.menuaudios'],
    ], m)
// conn.sendFile(m.chat, null, null, m, null, true, {
// type: 'audioMessage', 
// ptt: true
// })
}
handler.customPrefix = /^(bot|robot)$/i
handler.command = new RegExp
export default handler
