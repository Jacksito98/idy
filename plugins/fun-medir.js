let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber cuando le mide ${command.replace('how', '')}*`
let textoco = `
_*Le mide* *${Math.floor(Math.random() * 30)}%* *Cm a*_ *${text}* 🥵😏
`
m.reply(textoco, null, {mentions: conn.parseMention(textoco)})
}
handler.help = ['medir @user']
handler.tags = ['fun']
handler.command = /^(medir)/i
handler.fail = null
export default handler
