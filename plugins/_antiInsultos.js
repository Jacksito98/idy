const isSatir = /bot mierda|muertos bot|pesao bot|bot hijo de puta|bot cabron|bot hdp|bot hp|bot puto|asco  bot|bot idiota|bot tonto|bot gilipollas|bot hijo puta|bot puta/i  // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiSatir = isSatir.exec(m.text)

    if (chat.antiSatir && isAntiSatir) {
        await conn.sendButton(m.chat, `*Insulto detectado!*`, author, ['Apagar antiInsultos', '/disable antiInsultos'], m)
await conn.sendButton(m.chat, `*Te acabo de quitar 5 diamantes por insultarme :)*\nEscribe *.limit* para ver cuantos te quedan`, wm, null, [
['Perdon', `.say Si te has arrepentido o no sabias nada hablale a mi creador para que te devuelva los diamantes\n\nwa.me/+573138952339\nWa.me/+34642467703`],
['Limites', `.limit`]
    ], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit -= 5
    
    
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    return !0
}
