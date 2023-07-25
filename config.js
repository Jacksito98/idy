import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['12602000000', 'Jacksito', true],
  ['18295176783'], 
  ['687535555'] 
] //Numeros de owner 

global.mods = ['687535555'] 
global.prems = ['50489079501', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'idy┃ᴮᴼᵀ' 
global.author = '@wx_j4ck' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/wx_j4ck\n' 
global.dygp = 'https://www.instagram.com/wx_j4ck'
global.fgsc = 'https://github.com' 
global.fgyt = 'https://youtube.com'
global.fgpyp = 'https://paypal.me'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.linkgc = 'https://chat.whatsapp.com/D2kkLywqKa0G3IfIm7eNf2'
global.nycuser = 'https://github.com/ALBERTO9883'
global.script = 'https://github.com/ALBERTO9883/NyanCatBot-MD'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
