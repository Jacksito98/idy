import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch' 
import axios from 'axios'

let handler = async (m, { conn }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=85faf717d0545d14074659ad`)
let { url } = res
conn.sendFile(m.chat, url, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: false, body: `h`, mediaType: 2, sourceUrl: false, thumbnail: false}}}, { quoted: m })  

}
handler.help = ['smongus', 'stickersus']
handler.tags = ['sticker']
handler.command = ['smongus', 'stickersus'] 

export default handler
