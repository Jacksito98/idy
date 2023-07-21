import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m) => {
let motivasii = pickRandom(global.motivacion)
    await conn.reply(m.chat, motivasii, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: 'ＭＯＴＩＶＡＣＩＯＮ （^_^）', 
    body: 'Lee son Buenas😉',  
    sourceUrl: "", 
    thumbnailUrl: "https://i.ibb.co/xHqPNmQ/20230627-231554.jpg",
      }}
     })
}
handler.help = ['motivacion']
handler.tags = ['fun']
handler.command = /^(motivacion|motivación)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.motivacion = [
  "No hables, sólo actúa. No cuentes, solo muestra. No prometas, solo demuéstralo.",
  "Nunca dejes de dar lo mejor de ti solo porque alguien no te da crédito.",
  "Trabaja mientras ellos duermen. Aprende mientras ellos festejan. Ahorra mientras ellos gastan. Vive como su sueño.",
  "La clave del éxito es enfocar nuestra mente consciente en las cosas que deseamos, no en las cosas que tememos..",
  "No tengas miedo a fracasar. El miedo de estar el próximo año en el mismo lugar que estás ahora.",
  "Si seguimos haciendo lo que estamos haciendo, seguiremos obteniendo lo que obtuvimos.",
  "Si no puedes manejar el estrés, no lograrás el éxito.",
  "Sé terco con tus objetivos y flexible con tus métodos..",
  "El trabajo duro triunfa sobre el talento cuando el talento no trabaja duro.",
  "Recuerda que las mayores lecciones de la vida suelen aprenderse de los peores momentos y de los peores errores..",
  "La vida no se trata de esperar a que pase la tormenta, sino de aprender a bailar bajo la lluvia.",
  "Si el plan no funciona, cambia el plan, no la meta..",
  "No tengas miedo de que tu vida termine; ten miedo de que tu vida nunca comience.",
  "La persona verdaderamente grandiosa es la que hace que todos se sientan grandiosos.",
  "La experiencia es una maestra dura porque primero da la prueba, luego la lección.",
  "Saber cuánto hay por saber es el principio de aprender a vivir.",
  "El éxito no es definitivo, el fracaso no es fatal. Lo más importante es el coraje para continuar..",
  "Es mejor fracasar en la originalidad que tener éxito en la imitación.",
  "Atrévete a soñar, pero más importante, atrévete a actuar detrás de tus sueños.",
  "Márcate metas altas y no te detengas hasta alcanzarlas.",
  "Desarrollar el éxito del fracaso. El desánimo y el fracaso son dos de los peldaños más seguros hacia el éxito..",
  "El genio es uno por ciento de inspiración y noventa y nueve por ciento de transpiración..",
  "El éxito es donde se encuentran la preparación y la oportunidad.",
  "La perseverancia fracasó 19 veces y triunfó la 20..",
  "El camino al éxito y el camino al fracaso son casi exactamente iguales.",
  "El éxito suele llegar a aquellos que están demasiado ocupados buscándolo El éxito suele llegar a aquellos que están demasiado ocupados buscándolo.",
  "No dejes tu trabajo para mañana, que puedes hacerlo hoy.",
  "Dentro de 20 años, probablemente estarás más decepcionado por las cosas que no pudiste hacer que por las cosas que hiciste.",
  "No pierda su tiempo golpeando las paredes con la esperanza de convertirlas en puertas.",
  "La oportunidad es como un amanecer. Si esperas demasiado, te lo puedes perder.",
  "La vida es un 10 por ciento lo que te sucede y un 90 por ciento cómo reaccionas ante ello.",
  "Hay tres formas de lograr el mayor éxito: La primera forma es ser amable. La segunda manera es ser amable. La tercera forma es ser amable..",
  "La razón número uno por la que las personas fracasan en la vida es porque escuchan a sus amigos, familiares y vecinos..",
  "El tiempo es más valioso que el dinero. Puedes ganar más dinero, pero no puedes ganar más tiempo.",
  "Establecer metas es el secreto para un futuro emocionante.",
  "Cuando nos esforzamos por ser mejores de lo que somos, todo lo que nos rodea también se vuelve mejor..",
  "El crecimiento comienza cuando comenzamos a aceptar nuestras propias debilidades..",
  "Nunca te rindas cuando aún puedas volver a intentarlo. Nada se termina hasta que termines de intentar.",
  "La fuerza de voluntad es la clave del éxito. Las personas exitosas, se esfuerzan en lo que sienten aplicando su voluntad para vencer la apatía, la duda o el miedo.",
  "El fracaso nunca seguirá si la determinación de tener éxito es lo suficientemente fuerte..",
  "La fuerza de voluntad es la clave del éxito. Las personas exitosas, se esfuerzan en lo que sienten aplicando su voluntad para vencer la apatía, la duda o el miedo.",
  "Lo primero que hacen las personas exitosas es ver el fracaso como una señal positiva para el éxito.",
  "El sello distintivo de las personas exitosas es que siempre se esfuerzan por aprender cosas nuevas.",
  "El éxito es obtener lo que quieres, la felicidad es querer lo que obtienes..",
  "Los pesimistas ven dificultad en cada oportunidad. Los optimistas ven oportunidades en cada adversidad.",
  "La duda mata más sueños que el fracaso.",
  "Haz lo que tengas que hacer hasta que puedas hacer lo que quieras hacer.",
  "El optimismo es una de esas cualidades que está más asociada con el éxito y la felicidad que cualquier otra..",
  "La mayor recompensa para un trabajador duro no es lo que obtiene del trabajo, sino cuánto se desarrolla con él.",
  "La mejor forma de empezar es dejar de hablar y empezar a hacer.",
]
