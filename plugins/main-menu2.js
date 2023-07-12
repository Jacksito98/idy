
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡          <INFO DEL BOT + />

*Experiencia ➟* ${exp}

 👋🏻 𝙷𝚘𝚕𝚊 ╯(˙༥˙)♡ 
 
° 式 ⃟👨‍💻 Creador : @⁨Jacksitoに公式⁩
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

° 式 ⃟🍩 ${usedPrefix}sopa
° 式 ⃟🍩 .takestick
° 式 ⃟🍩 .autosticker
° 式 ⃟🍩 .getperfil
° 式 ⃟🍩 .welcome
° 式 ⃟🍩 .hidetag
° 式 ⃟🍩 .owner
° 式 ⃟🍩 .settingc
° 式 ⃟🍩 .infogrupo
° 式 ⃟🍩 .antienlace

<STICKER MAKE + />

° 式 ⃟🍓 .sticker
° 式 ⃟🍓 .stickgrupo
° 式 ⃟🍓 .stickperfil
° 式 ⃟🍓 .userstick

<CONVERSIONES + />

° 式 ⃟🎨 .toimg
° 式 ⃟🎨 .nightcore
° 式 ⃟🎨 .tobass
° 式 ⃟🎨 .fastvideo
° 式 ⃟🎨 .slow
° 式 ⃟🎨 .reverse
`

    let pp = './src/fg_logo.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
  m.react('📚')     
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
