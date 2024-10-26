
const { Client, LocalAuth } = require('whatsapp-web.js');


const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: '.wwebjs_auth'
    })
});

const qrcode = require('qrcode-terminal');
client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();

// Listening to all incoming messages
const translate = require('translate-google');

client.on('message_create', async (message) => {
    // Ignore messages sent by the bot
    if (message.fromMe) {
        return; // Exit the function if the message is from the bot
    }

    const franc = await import('franc').then(module => module.franc);
    
    let langCode = franc(message.body);

    // Assume English for short text if franc returns "und"
    if (langCode === 'und' && /^[A-Za-z0-9\s.,!?"'()]+$/.test(message.body)) {
        langCode = 'eng';
    }

    // Check for Malayalam language codes
    const malayalamCodes = ['ml', 'mal']; // Include both codes for Malayalam

    if (langCode === 'eng') {
        console.log("Yes, the message is in English.");
        try {
            const translatedText = await translate(message.body, { to: 'ml' }); // Translate to Malayalam
            console.log("Translated to Malayalam:", translatedText);
            await message.reply(translatedText); // Reply with the translated text
        } catch (error) {
            console.error("Translation error:", error);
            await message.reply("Sorry, I couldn't translate that."); // Reply with an error message
        }
    } else if (malayalamCodes.includes(langCode)) {
        console.log("Yes, the message is in Malayalam.");
        try {
            const translatedText = await translate(message.body, { to: 'en' }); // Translate to English
            console.log("Translated to English:", translatedText);
            await message.reply(translatedText); // Reply with the translated text
        } catch (error) {
            console.error("Translation error:", error);
            await message.reply("Sorry, I couldn't translate that."); // Reply with an error message
        }
    } else {
        console.log("No, the message is not in English or Malayalam.");
        // await message.reply("No, the message is not in English or Malayalam."); // Reply with a message indicating it's neither
    }

    console.log("Detected language code:", langCode);
});
