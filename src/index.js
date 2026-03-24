const mineflayer = require('mineflayer');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// إعداد الذكاء الاصطناعي
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const bot = mineflayer.createBot({
    host: process.env.MC_HOST,
    port: parseInt(process.env.MC_PORT),
    username: process.env.MC_USER,
    version: process.env.MC_VERSION
});

bot.on('chat', async (username, message) => {
    // تجاهل رسائل البوت نفسه
    if (username === bot.username) return;

    // الاستجابة فقط للقائد WEBORO أو عند مناداتي بـ "بوت"
    if (username === 'weboro' || message.includes('بوت')) {
        try {
            const prompt = `أنت NEBULA-AI، مساعد ذكي في ماين كرافت. مطورك هو ياسين، وقائدك في اللعبة هو weboro. رد باختصار على: ${message}`;
            const result = await model.generateContent(prompt);
            const response = await result.response;
            bot.chat(`[NEBULA] ${response.text()}`);
        } catch (error) {
            bot.chat("عذراً سيدي WEBORO، هناك اضطراب في معالج الذكاء الاصطناعي.");
        }
    }
});


bot.once('spawn', () => {
    console.log(`✅ NEBULA-AI Online | Version: ${process.env.MC_VERSION}`);
});