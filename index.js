// const TelegramBot = require("node-telegram-bot-api");
import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";

config();

const TOKEN = process.env.BOT_TOKEN

const bot = new TelegramBot(TOKEN, { polling: true });

let usersData = [
  { chatId: 7224744848, firstName: "дурдиева зарина.", admin: true },
  { chatId: 6652899566, firstName: "Avazbek_772", admin: false },
  { chatId: 5710316881, firstName: "ㅤ", admin: false },
  { chatId: 1072558595, firstName: "Javlonbek", admin: false },
  { chatId: 2107803986, firstName: "𝓈𝒽ℴ𝓍𝓇𝓊𝓍", admin: false },
  { chatId: 5939918281, firstName: "Максадбек", admin: false },
  { chatId: 7934573669, firstName: "Jumaniyozov.s", admin: false },
  { chatId: 1516297303, firstName: "Behruzbek", admin: true },
  { chatId: 7076013168, firstName: "N.J", admin: false },
  { chatId: 875072364, firstName: "Abbosbek", admin: true },
  { chatId: 7327491007, firstName: "atabkvv", admin: false },
];

bot.on("message", (msg) => {
  // console.log(msg);
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  //   bot.sendMessage(chatId, text);
  // start uchun handler
  if (text == "/start") {
    const userExists = usersData.find((user) => user.chatId === chatId);

    console.log(!!userExists);

    if (!userExists) {
      usersData = [...usersData, { chatId: chatId, firstName: firstName }];
    }

    console.log(usersData);
    bot.sendMessage(
      chatId,
      `
        👋 Assalomu alaykum, ${firstName}!

📚 100x Academy o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin  
• Jadval va to‘lovlar haqida ma’lumot olasiz  

Quyidagi menyudan kerakli bo‘limni tanlang 👇

        `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "📚 Kurslar" }, { text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "ℹ️ Markaz haqida" }, { text: "💬 Fikr bildirish" }],
            [{ text: "❓ Yordam" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (text == "📚 Kurslar") {
    bot.sendMessage(
      chatId,
      `🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

    1️⃣ Ingliz tili  
    2️⃣ Rus tili  
    3️⃣ Matematika  
    4️⃣ Dasturlash (Python, Web)  
    5️⃣ Grafik dizayn  
    
    👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:
    `,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "🇬🇧 Ingliz tili", callback_data: "english" }],
            [{ text: "🇷🇺 Rus tili", callback_data: "russian" }],
            [{ text: "🧮 Matematika", callback_data: "math" }],
            [{ text: "💻 Dasturlash", callback_data: "it" }],
            [{ text: "🎨 Grafik dizayn", callback_data: "design" }],
          ],
        },
      }
    );
  } else if (text == "✍️ Ro‘yxatdan o‘tish") {
    for (let tgUser of usersData) {
      if (tgUser.admin === true) {
        bot.sendMessage(
          tgUser.chatId,
          `Yangi xabar ✅\nUser: ${firstName}\nchatId: ${chatId}`
        );
      }
    }

    bot.sendMessage(
      chatId,
      `Ma'lumotlaringiz saqlandi va operatorlarimizga yuborildi ✅`
    );
  } else {
    bot.sendMessage(
      chatId,
      `
    ⚠️ Kechirasiz, men sizning xabaringizni tushunmadim.

Iltimos, quyidagi tugmani bosing 👇
/start

    `
    );
  }
});

console.log("Bot ishga tushdi...");
