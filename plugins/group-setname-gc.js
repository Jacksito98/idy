let handler = async (m, { conn, args, usedPrefix, command }) => {

    await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
    m.reply('✅ Cambio exitoso de nombre de grupo')
  }
  
  handler.help = ['setnamegp <text>']
  handler.tags = ['group']
  handler.command = /^setnamegp$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  handler.register = false
  handler.admin = true
  handler.botAdmin = true
  
  export default handler
