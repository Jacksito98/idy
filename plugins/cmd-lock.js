let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!m.quoted) throw 'Respuestas a mensajes!'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'Comando no encontrado en la base de datos'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('Done!')
} 
handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['cmd']
handler.command = /^(un)?lockcmd$/i
handler.premium = true

export default handler
