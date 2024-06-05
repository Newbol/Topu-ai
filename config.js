//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL re|| "https://wa.me/qr/3BGKYY7SMSQ4A1";
global.website = process.env.GURL || "https://wa.me/qr/3BGKYY7SMSQ4A1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/04e09c20e70de180ee319.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "2348138392770";
global.owner = process.env.OWNER_NUMBER || "2348138392770";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtObmJ4WGRDb0lJN0Q5d3VXK0VtbmVCOWxhTXRybENPSFVTZ0JwZXdYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3EvT0dyVWNQNFJzMkU3SG9wTDVRQUM4MzBYNGhzSzhLRm1RSmZSR09YMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQzA2ZGR0L3RuS0dGM25WamduTXhwRUUzVWpDOURhR01uNkwyV1pKMVdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJETXdkN0ZJdVRXUDhsYVZ3eWVmTmFRMUVBQ0NKbXJBcmtHNENFWkMrd3pvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDZExxc2UxQU05TmYrek04S0FqdXZ2b0hzczgwQjJ6alpVSU4zNy9jbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE1angzTjREVmxqbnRXaERNMFFmcGRNWE9QU243VHRNTFNLbUFPeTRwaUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFA4ZDgxdkF6OG9MVDNvWlF1bzBVQW8wMWV4eEtnUE9hQzZsSVdFQlZVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTNXR1Fic2JPQUh6WG9QZEw0TW1oWGNmT1JtS0NENkVtZ1JJaHpBNlUwTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgzMXlvQmtCZ2swTWN4OFo4TzR6MFFIRkVJNFlSSzcrK0NmSElwTmc3ZkVIWUpLSnlEWVROZ05kR2hWN2VJKytTbWk0cDRjbm9lWUtnaW1vMmJMMUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUxLCJhZHZTZWNyZXRLZXkiOiJESFpJS1F6QVlaWFRPeDZjZkljMU9kR0MyTUFDTkVpUjFPbnByRjdyRU9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzZ0dJX2RWVVFUcTZMUV9qcEN4aE5BIiwicGhvbmVJZCI6IjlkODg2Mjc5LTk5NDQtNGVjNC04MDRlLWNkOGE2YmVhNmNkNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZ29FRzhlSXdnV2pQWU1NZVc3WXlBbTVyQkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSytMUUw1WE03TUdaL3l4N0xJQXpMRjBtdTU0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdRMzQ3WDJWIiwibWUiOnsiaWQiOiIyMzQ4MTM4MzkyNzcwOjQ0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMQ3d0UG9GRVBPcWc3TUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqdTZVYThTSlRNaGxObmJPdmQ1eGp3VkNBeHA4VUFUOGJlK3pOL0diRldVPSIsImFjY291bnRTaWduYXR1cmUiOiJ4dThDU3A2U09LbGZzOWZUL09lbUszWG5wRjFtR3g2di9vVDdBNDZrdXlXWm9WTldOMW8zb1p3c05NMlRqS0dMdlh6VkJrSU80S3VDWEZCZ29JeUVEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZURseUZUYktwdjV2NXhKY1p4Zi82SDgvSFVRaE9Ba3FmMHllZXZkcWtsenVQR0pnK3JyaDhtSE1JWHRVeXFZMlV2RHd1WkJXNG5VYTFEaGF2RGg2QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM4MzkyNzcwOjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk3dWxHdkVpVXpJWlRaMnpyM2VjWThGUWdNYWZGQUUvRzN2c3pmeG14VmwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTc2MjIxNDV9
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "SAY HI TO BOLEXY ON WHATSAPP"
    author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
