import { promises } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, usedPrefix, command }) => {


        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!/audio/.test(mime)) throw `Responda al vn/audio que desea cambiar con un título *${usedPrefix + command}*`
        let audio = await q.download?.()
        if (!audio) throw 'Can\'no descargar audio!'
        if (!args[0] || !args[1]) throw `Ejemplo: ${usedPrefix + command} 00:00:30 00:00:30`
            let ran = (new Date * 1) + '.mp3'
            let media = '../tmp/' + ran
            let filename = media + '.mp3'
            await promises.writeFile(media, audio)
            exec(`ffmpeg -ss ${args[0]} -i ${media} -t ${args[1]} -c copy ${filename}`, async (err) => {
                await promises.unlink(media)
                if (err) return Promise.reject( `_*Error!*_`)
                let buff = await promises.readFile(filename)
                m.reply(wait)
                conn.sendFile(m.chat, buff, filename, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                await promises.unlink(filename)
            })
}
handler.help = ['cut'].map(v => v + ' <text>')
handler.tags = ['audio']
handler.command = /^cut$/i

export default handler
