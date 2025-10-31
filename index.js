import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8005568684:AAFWXfVJvDJHBE7nZxDyWFWD5KNjiFqebfM"

const bot =new TelegramBot(TOKEN,{ polling: true})

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Salom");
  const text = msg.text;
  const firstname = msg.chat.first_name;
  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🥩" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash ") {
    bot.sendMessage(chatId, "Boshlanyaptii....");
  } else if (text == "Menu 🥩") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz....");
  } else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Sozlamalar xush kelibsiz ⚙️....");
  } else {
    bot.sendMessage(chatId, "❗️ Xatolik, iltimos /start tugmasini bosing... ");
  }
});

console.log("Bot ishga tushdi");


console.log("Bot ishga tushdi  ");