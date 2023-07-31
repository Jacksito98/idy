let handler = async (m, { conn }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = (await conn.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
  for (let user of users) if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user !== '529984907794@s.whatsapp.net' && user!== '529984907794@s.whatsapp.net')  await conn.groupRemove(m.chat, [user])
}
handler.help = ['kickall']
handler.tags = []
handler.command = /^(kickall)$/i
handler.owner = true
handler.group = true
handler.admin = false
module.exports = handler
