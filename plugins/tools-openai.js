
import cheerio from 'cheerio';
import gpt from 'api-dylux';
let handler = async(m) => {
	conn.sendMessage(m.chat, {
		text: text,
		contextInfo: {
		externalAdReply: {
		title: "乂 ©ＩＤＹ ٩(˘◡˘)۶ B O T Z",
		body: "",
		thumbnailUrl: "https://i.ibb.co/xHqPNmQ/20230627-231554.jpg",
		sourceUrl: "",
		mediaType: 1,
		renderLargerThumbnail: true
		}}}, { quoted: m})	
	
if (!text) throw `✳️ Ingresa el texto`;
m.react('💬')

	try {
        let syms = `Eres Idy Bot, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
        let res = await gpt.ChatGpt(text, syms)
         await m.reply(res.text)
	} catch {
		m.reply(`❎ Error: intenta más tarde`);
	}

}
handler.help = ['ia <text>']; 
handler.tags = ['tools'];
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt'];

export default handler;
