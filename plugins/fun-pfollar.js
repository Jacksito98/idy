let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let textoco = `
_*Tienes* *${Math.floor(Math.random() * 100)}%* *d probabilidad d follarte a*_ *${text}* 🥵😏
`
m.reply(textoco, null, {mentions: conn.parseMention(textoco)})
}
handler.help = ['pfollar @user']
handler.tags = ['fun']
handler.command = /^(pFollar)/i
handler.fail = null
export default handler