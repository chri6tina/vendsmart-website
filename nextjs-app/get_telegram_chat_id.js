const https = require('https');

const BOT_TOKEN = '8338344291:AAF-Fyv63CL2eM_5XwBGVSbXF-gjNw6EKTU';

console.log('Checking Telegram for recent messages...');
console.log('If this fails, please make sure you have opened your bot on Telegram and sent it a message like "Hello".\n');

https.get(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        try {
            const response = JSON.parse(data);
            if (response.ok && response.result.length > 0) {
                // Get the most recent message
                const latestMessage = response.result[response.result.length - 1];
                if (latestMessage.message && latestMessage.message.chat) {
                    const chatId = latestMessage.message.chat.id;
                    const username = latestMessage.message.chat.username || latestMessage.message.chat.first_name || 'User';

                    console.log(`✅ SUCCESS! Found Chat ID for ${username}:`);
                    console.log(`==========================================`);
                    console.log(`YOUR CHAT ID IS: ${chatId}`);
                    console.log(`==========================================`);
                } else {
                    console.log('❌ Could not find a chat in the latest update.');
                }
            } else if (response.ok && response.result.length === 0) {
                console.log('⏳ No messages found yet!');
                console.log('ACTION REQUIRED:');
                console.log('1. Open the Telegram app.');
                console.log('2. Search for your bot and click "Start".');
                console.log('3. Send any message to the bot (e.g. "Hi").');
                console.log('4. Run this script again.');
            } else {
                console.log('❌ Telegram API Error:', response.description);
            }
        } catch (e) {
            console.log('❌ Error parsing response:', e);
        }
    });

}).on("error", (err) => {
    console.log("❌ HTTP Error: " + err.message);
});
