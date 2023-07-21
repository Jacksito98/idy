
import cheerio from 'cheerio';
import gpt from 'api-dylux';
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Ingresa el texto`;
m.react('💬')

	try {
        let syms = `Eres Idy Bot, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
        let res = await gpt.ChatGpt(text, syms)
		 await conn.sendMessage(res.text, {
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
handler.help = ['ia <text>']; 
handler.tags = ['tools'];
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt'];

export default handler;
