let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
/*var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*-Solo asuntos importantes-*`
let buttonMessage= {
'document': { url: `https://github.com/ALBERTO9883` },
'mimetype': `application/${document}`,
'fileName': `🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/ALBERTO9883',
'mediaType': 2,
'previewType': 'pdf',
'title': botname,
'body': `⚘Aʟʙᴇʀᴛᴏ Y Asʜʟʏ⚘`,
'thumbnail': global.imgmenu,
'sourceUrl': 'https://wa.me/50499698072' }},
'mentions': [m.sender],
'caption': texto1,
'footer': `\n${global.saludo}`,
'buttons':[
{buttonId: `${usedPrefix}owner`, buttonText: {displayText: 'Owner🐢'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, false, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ī.am/☪︎Jacksito🍃/ღᴀ;;;\nFN:ī.am/☪︎Jacksito🍃/ღᴀ\nORG:ī.am/☪︎Jacksito🍃/ღᴀ\nTITLE:\nitem1.TEL;waid=12602000000:+12602000000\nitem1.X-ABLabel:ī.am/☪︎Jacksito🍃/ღᴀ\nX-WA-BIZ-DESCRIPTION:🐱Creador oficial de IdyBot.\nX-WA-BIZ-NAME:ī.am/☪︎Jacksito🍃/ღᴀ\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ī.am/☪︎Jacksito🍃/ღᴀ', contacts: [{ vcard }] }}, {quoted: m})
}
handler.tags =['owner']
handler.help = ['helpme']
handler.customPrefix = /^(@12602000000)$/i
handler.command = new RegExp
export default handler
