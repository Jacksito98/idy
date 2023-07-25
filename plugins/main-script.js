import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT BOT*

▢ _*SCRIPT BOT BY JACKSITO 98*_
➠ Owner : Jack
➠ Instagram : @wx_J4ck
➠ Bot privado si me caes bien te paso el sc
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
