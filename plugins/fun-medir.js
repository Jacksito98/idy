let handler = async (m, { conn, command, text }) => {
m.react('🫣')  
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber cuanto le mide 7w7*`
let textoco = `
*Le mide* *${Math.floor(Math.random() * 30)}Cm a* *${text}* 🥵😏
`
m.reply(textoco, null, {mentions: conn.parseMention(textoco)})
}
handler.help = ['medir @user']
handler.tags = ['fun']
handler.command = /^(medir)/i
handler.fail = null
export default handler
