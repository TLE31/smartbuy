'use server'
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOTTOKEN);

const chatId = process.env.CHATID;

export const shareProduct = async (image: string, telegramData: String) => {
    try {
        await bot.sendPhoto(chatId, image, { caption: telegramData });
    } catch (error) {
        console.log(error);
    }
}
