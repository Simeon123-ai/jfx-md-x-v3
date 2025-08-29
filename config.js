const fs = require('fs');
const path = require('path');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Function to get a random image from the src folder
function getRandomImage(dir = './src') {
    const files = fs.readdirSync(dir)
        .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    
    if (files.length === 0) {
        console.warn('No images found in src folder, using default URL');
        return 'https://files.catbox.moe/6jfywh.jpg';
    }
    
    const randomFile = files[Math.floor(Math.random() * files.length)];
    return path.join(dir, randomFile);
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    ANTI_CALL: process.env.ANTI_CALL || "true",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*ꜱᴇᴇɴ ʏᴏᴜʀ ꜱᴛᴀᴛᴜꜱ ʙʏ ᴊꜰx ᴍᴅ-xᴠ3*",
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    AUTO_BIO: process.env.AUTO_BIO || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
    WELCOME: process.env.WELCOME || "true",
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    MENTION_REPLY: process.env.MENTION_REPLY || "true",
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || getRandomImage(),
    PREFIX: process.env.PREFIX || "/",
    BOT_NAME: process.env.BOT_NAME || "ᴊꜰx ᴍᴅ-xᴠ3",
    STICKER_NAME: process.env.STICKER_NAME || "ᴊꜰx ᴍᴅ-xᴠ3",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2347046970033",
    OWNER_NAME: process.env.OWNER_NAME || "ᴊᴇᴘʜᴛᴇʀ ᴛᴇᴄʜ",
    DESCRIPTION: process.env.DESCRIPTION || "© ᴊᴇᴘʜᴛᴇʀ ᴛᴇᴄʜ",
    ALIVE_IMG: process.env.ALIVE_IMG || getRandomImage(),
    LIVE_MSG: process.env.LIVE_MSG || "> Powered by ᴊᴇᴘʜᴛᴇʀ ᴛᴇᴄʜ",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    MODE: process.env.MODE || "public",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    READ_CMD: process.env.READ_CMD || "false",
    DEV: process.env.DEV || "2349046157539",
    ANTI_VV: process.env.ANTI_VV || "true",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
