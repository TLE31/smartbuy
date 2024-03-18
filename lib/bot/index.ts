'use server'
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot("6941276165:AAE6u75Re-butYbaHv-ffwx37jN7smMvgT0");

const chatId = -4056060773;

export const shareProduct = async (image: string, telegramData: String) => {
    try {
        await bot.sendPhoto(chatId, image, { caption: telegramData });
    } catch (error) {
        console.log(error);
    }
}
