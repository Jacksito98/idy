
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
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
° 式 ⃟🎁 Chats Totales : 48
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
