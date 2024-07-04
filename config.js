const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_04_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGcHZyOGdkMmphbi9ocHFqOGE3REhrYlZRbi84RERrTFNvR1g3VERkeVFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyUGMtclZTRlJ6eUJhTEpFWHdfM2hBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3MjE1MDgwLTUyYWYtNGM0Ni05OGQzLTI2ZTJjOWVhYTYzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxNDAsXG4gICAgICAzNCxcbiAgICAgIDQyLFxuICAgICAgMTgxLFxuICAgICAgNjksXG4gICAgICAxOTUsXG4gICAgICAyMDAsXG4gICAgICA2NSxcbiAgICAgIDE1NSxcbiAgICAgIDE0NyxcbiAgICAgIDczLFxuICAgICAgMTg5LFxuICAgICAgMjQ1LFxuICAgICAgMjUxLFxuICAgICAgMTk2LFxuICAgICAgMTksXG4gICAgICA5MixcbiAgICAgIDE3MSxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAyMTMsXG4gICAgICAwLFxuICAgICAgMTUzLFxuICAgICAgMTczLFxuICAgICAgMTQ3LFxuICAgICAgMjcsXG4gICAgICA5NCxcbiAgICAgIDg0LFxuICAgICAgNixcbiAgICAgIDAsXG4gICAgICAxNjAsXG4gICAgICAyMjIsXG4gICAgICA5MyxcbiAgICAgIDE0NCxcbiAgICAgIDE4OSxcbiAgICAgIDE2MixcbiAgICAgIDY1LFxuICAgICAgNyxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSODI5TEg3NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDcwMDQwMTMwMTo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQxNzM0MTg5MjUyNjg2OjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qUzgwd1FpZWVadEFZWVFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZkh2UUxITU5hU3NGeVlya1RVSkV5cUV6YXhsV0tReHp2aWtzUmdJOGx6TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwcDhhSzRYcGlIcVc5QXB3WUsrTC8weDBLSWZ6VTRZY2UwMExpakVPNWk4UHVmZGZBek1pWTF6R1gxUHFCZS9XSG91RkFtWUJxajc0cXJ0VDFqdkNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrWE5UYW9FUTFac3V0eVhxSTh5ZkNtanhwVEZRKzA3MVR3OGxWUklWclgwdjc0YUxMeUFIUWY4cjZYZE5GSlIxemZFWUszM1pyeDJQZ1AxTDFCM3Jpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwNzAwNDAxMzAxOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4NzQ1MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
