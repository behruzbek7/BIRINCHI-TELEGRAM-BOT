import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8005568684:AAFWXfVJvDJHBE7nZxDyWFWD5KNjiFqebfM"

const bot =new TelegramBot(TOKEN,{ polling: true})

bot.on("message", function(msg) {
    const chatID = msg.chat.id;
    bot.sendMessage(chatID,"XURMATLI MIZOR BIZNING BOTIMIZDA NIMA KERE")
})