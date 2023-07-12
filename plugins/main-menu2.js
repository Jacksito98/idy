
import fetch from 'node-fetch'
import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async function (m, { conn, text, usedPrefix }) {
    const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
    const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
    const used = process.memoryUsage()
    const cpus = _cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
      return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
      last.total += cpu.total
      last.speed += cpu.speed / length
      last.times.user += cpu.times.user
      last.times.nice += cpu.times.nice
      last.times.sys += cpu.times.sys
      last.times.idle += cpu.times.idle
      last.times.irq += cpu.times.irq
      return last
    }, {
      speed: 0,
      total: 0,
      times: {
        user: 0,
        nice: 0,
        sys: 0,
        idle: 0,
        irq: 0
      }
    })
    let old = performance.now()
    
    let neww = performance.now()
    let speed = neww - old
    
  let infobt = `

≡          <INFO DEL BOT + />


° 式 ⃟👨‍💻 Creador : @⁨Future Botに公式⁩
° 式 ⃟🔣 Prefix : Multi Prefix
° 式 ⃟🕰️ Runtime : 00h : 08m : 23s
° 式 ⃟⏰ Runtime os : 00h : 49m : 51s
° 式 ⃟🔖 Total Hit's : 69908
° 式 ⃟🌈 Hit's de Hoy : 44
° 式 ⃟🚀 Velocidad : 0.0411

    <CHATS & MODS + />

° 式 ⃟📬 Chats de Grupo : 17
° 式 ⃟🔐 Chats Privados : 31
° 式 ⃟🎁 Chats Totales : *${chats.length}*
° 式 ⃟👀 Auto Leer : Activado
° 式 ⃟📝 Escribiendo : Desactivado
° 式 ⃟🎙️ Grabando : Activado

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
💌 <SOCIAL YOUTUBE + />
 •> https://youtube.com

📦 <PACKAGE GITHUB + />
 •> https://github.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
• Bot En proceso de progrmacion cualquier 
error por favor reportar con el comando .report

<MENÚ SIMPLE + />

° 式 ⃟🍩 ${usedPrefix}inspect
° 式 ⃟🍩 ${usedPrefix}takestick
° 式 ⃟🍩 ${usedPrefix}autosticker
° 式 ⃟🍩 ${usedPrefix}getperfil
° 式 ⃟🍩 ${usedPrefix}welcome
° 式 ⃟🍩 ${usedPrefix}hidetag
° 式 ⃟🍩 ${usedPrefix}owner
° 式 ⃟🍩 ${usedPrefix}settingc
° 式 ⃟🍩 ${usedPrefix}infogrupo
° 式 ⃟🍩 ${usedPrefix}antienlace

<STICKER MAKE + />

° 式 ⃟🍓 ${usedPrefix}sticker
° 式 ⃟🍓 ${usedPrefix}stickgrupo
° 式 ⃟🍓 ${usedPrefix}stickperfil
° 式 ⃟🍓 ${usedPrefix}userstick

<CONVERSIONES + />

° 式 ⃟🎨 ${usedPrefix}toimg
° 式 ⃟🎨 ${usedPrefix}nightcore
° 式 ⃟🎨 ${usedPrefix}tobass
° 式 ⃟🎨 ${usedPrefix}fastvideo
° 式 ⃟🎨 ${usedPrefix}slow
° 式 ⃟🎨 ${usedPrefix}reverse
`

    let pp = './src/Menu2idy.mp4' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
 m.react('📚')      
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
