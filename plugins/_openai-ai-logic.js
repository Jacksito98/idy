var fetch = require('node-fetch');
var util = require('util');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Ingrese una pregunta!\n\n*Ejemplo:* Quién eres? `
//Set Logic Disini 
let logic = 'Hola, soy un bot de WhatsApp BetaBotz-Md desarrollado por Lann, mi nombre es Betabotz-Md, estoy hecho por Lann con una perfección inigualable, si desea obtener más información sobre mi propietario, visite https://api.betabotz.org'
await m.reply(wait)
  var js = await fetch(API('lann', '/api/search/opi-dylux', { text: `${text}`, logic: `${logic}`, apikey: lann }))
var json = await js.json()
try {
  await m.reply(json.message)
} catch (err ) {
m.reply(util.format(json))
}}
handler.command = handler.help = ['ai2','openai2','chatgpt2'];
handler.tags = ['info'];
handler.premium = false
module.exports = handler;
