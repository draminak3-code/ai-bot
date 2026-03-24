module.exports = {
    host: process.env.SERVER_IP,
    port: parseInt(process.env.SERVER_PORT) || 25565,
    username: process.env.BOT_NAME || 'NEBULA_AI',
    version: '1.21.11',
    api_key: process.env.SERVER_API // الـ API الخاص بالسيرفر لاستخدامات متقدمة
};