function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:JACK OFFC\nitem1.TEL;waid=1260200000:1260200000\nitem1.X-ABLabel:\nNo envíes spam\nURL;My Web:https://Jacksitofficial.me\nEMAIL;Email Owner:Jacksito98@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
