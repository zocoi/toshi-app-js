const Bot = require('./lib/Bot')
let bot = new Bot()

bot.onEvent = function(session, message) {
  switch (message.type) {
    case 'Init':
      welcome(session)
      break
    case 'Message':
      onMessage(session, message)
      break
  }
}


function welcome(session) {
  if (session.user.name) {
    session.reply(`Hello ${session.user.name}!`)
  } else{
    session.reply(`Hello Toshi!`)
  }
}


function onMessage(session, message) {
  session.reply("I'm not sure what to say")
}
