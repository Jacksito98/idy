import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn }) => {
	
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let marah = global.API('https://some-random-api.com', '/canvas/jail', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png'), 
  })
let stiker = await sticker(false, marah, global.packname, global.author)
  if (stiker) return await conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
  
  throw stiker.toString()
}


handler.help = ['jail <@user>']
handler.tags = ['sticker']
handler.command = ['jail', 'jail', 'ger'] 

export default handler
