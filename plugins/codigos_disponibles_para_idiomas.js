let handler = async (m, { conn, text }) => {

  conn.reply(m.chat, `
Formato para uso: 
#tts (código) (texto)

Ejemplo:
#tts es Hola mundo 

ᴘᴏʀ ғᴀᴠᴏʀ ɴᴏ ᴀʙᴜsᴀʀ ᴅᴇʟ ᴛᴛs ɴɪ ᴍᴀɴᴅᴇs ʟɪsᴛᴀs ʟᴀʀɢᴀs ᴘᴀʀᴀ ǫᴜᴇ ᴅɪɢᴀ ᴇʟ ʙᴏᴛ ɢʀᴀᴄɪᴀs ｡^‿^｡ ᴛᴏᴅᴏ ᴇs sᴀɴᴄɪᴏɴᴀʙʟᴇ.. 🌿


Lista de códigos: 
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.help = ['codigos']
handler.tags = ['tools']
handler.customPrefix = /codigos para audios|codigosparaaudios|códigos para audios|Códigos para audios|Códigos|codigos/i
handler.command = new RegExp

export default handler
