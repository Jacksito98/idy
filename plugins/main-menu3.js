
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ Ｍｅｎｕ Ｇａｍｅｓ  (∩_∩)

▢ 👋🏻 𝙷𝚘𝚕𝚊 @${who.split('@')[0]} 𝚂𝚒 𝚝𝚒𝚎𝚗𝚎𝚜 𝚊𝚕𝚐𝚞𝚗 𝚕𝚒𝚗𝚔 𝚍𝚎 𝚊𝚕𝚐𝚞𝚗 𝚓𝚞𝚎𝚐𝚘 𝚌𝚛𝚊𝚌𝚔𝚎𝚍𝚘 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚊𝚜 𝚛𝚎𝚌𝚘𝚖𝚎𝚗𝚍𝚊𝚛  𝚌𝚘𝚖𝚞𝚗𝚒𝚌𝚊𝚛 𝚊𝚕 𝚘𝚠𝚗𝚎𝚛 👾 

┌─⊷ *JUEGOS* 
▢ 𝙼𝚒𝚗𝚎𝚌𝚛𝚊𝚏𝚝 𝙱𝚎𝚛𝚍𝚛𝚘𝚌𝚔 1.20
https://www.mediafire.com/file/6oa12yjrvn2jr1b/MCPE_1.20.1_OFICIAL_%25C3%259ALTIMA_VERSI%25C3%2593N.apk/file
─────────────
▢ 𝙶𝚝𝚊 𝚂𝚊𝚗 𝙰𝚗𝚍𝚛𝚎𝚊𝚜 𝙼𝚘𝚋𝚒𝚕𝚎
https://www.mediafire.com/file/hvoiesnbdsixtmm/GTA__SA_2.10.apk/file
─────────────
𝙽𝚘𝚝𝚊: 𝙽𝚞𝚎𝚜𝚝𝚛𝚘𝚜 𝚕𝚒𝚗𝚔𝚜 𝚎𝚜𝚝𝚊𝚗 𝚕𝚒𝚋𝚛𝚎𝚖𝚎𝚗𝚝𝚎 𝚍𝚎 𝚟𝚒𝚛𝚞𝚜, 𝚊𝚜𝚒 𝚚𝚞𝚎 𝚗𝚘 𝚑𝚊𝚢 𝚚𝚞𝚎 𝚝𝚎𝚗𝚎𝚛 𝚖𝚒𝚎𝚍𝚘.
└──────────────
`

    let pp = './src/Idy-Games.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['juegos']
handler.tags = ['main']
handler.command = ['menu3', 'juegos'] 

export default handler
