import fetch from 'node-fetch';
import util from 'util';
import gpt from 'api-dylux';
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `¡Ingrese una pregunta!\n\n*Ejemplo:*Quien es el presidente de la republica dominicana? `
await m.reply(wait)
  await m.reply(res.text)
	} catch {
		m.reply(`❎ Error: intenta más tarde`);
	}
  await conn.sendMessage(m.chat, {
text: json.message,
contextInfo: {
externalAdReply: { 
title: 'Chat GPT',
body: '',
thumbnailUrl: "https://telegra.ph/file/7a385897829927b981dfa.jpg",
sourceUrl: "https://api.betabotz.org",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err) {
m.reply(util.format(js))
}}
handler.command = handler.help = ['ia','openai','chatgpt'];
handler.tags = ['info'];
handler.limit = 3
export default handler;
