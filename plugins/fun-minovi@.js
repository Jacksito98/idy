let handler = async (m, { conn, text, usedPrefix }) => {

  if (!text) return conn.reply(m.chat, 'Etiqueta a tu nv xd', m)

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    let str = `Est@ es mi novi@ a q es precios@?😍🤤 @${who.replace(/@.+/, '')}`
    let mentionedJid = [who]

    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['Minovio/Minovia @user']
handler.tags = ['fun']
handler.command = /^minovio|minovia$/i

handler.group = true

export default handler
