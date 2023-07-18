import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(@17862475938)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
"https://telegra.ph/file/b6916a9db9c26d80da88e.jpg",
"https://telegra.ph/file/4b218ca74c6de4b5d3225.jpg",
"https://telegra.ph/file/33297b3d12d3a1b49dd96.jpg",
"https://telegra.ph/file/acb96cb64f4af5b86f793.jpg",
"https://telegra.ph/file/4ff48c16c1d19e80c066f.jpg",
"https://telegra.ph/file/97f1cd5fbec71e05840e7.png",
"https://telegra.ph/file/2a3268070ea719f0e9277.jpg",
"https://telegra.ph/file/1a7beef73c794c45eb45b.jpg",
"https://telegra.ph/file/cd172ac5dc84debad5c5e.jpg",
"https://telegra.ph/file/bcc5d46bbcfb15df133e0.jpg",
"https://telegra.ph/file/a01cc277cf5999c89a99e.mp4", 
"https://telegra.ph/file/bc24c90a38b206538e8aa.jpg",
"https://telegra.ph/file/e529e13f0700f97931f75.jpg",
"https://telegra.ph/file/07006374e1f95b15c9ee2.jpg",
"https://telegra.ph/file/49ca496f428e35cabeec3.mp4",
]
