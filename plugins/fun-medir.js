let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber cuando le mide el pene`
let textoco = `
_*te mide* *${Math.floor(Math.random() * 100)}% cm
`
m.reply(textoco, null, {mentions: conn.parseMention(textoco)})
}
handler.help = ['medir @user']
handler.tags = ['fun']
handler.command = /^(medir)/i
handler.fail = null
export default handler
