require('dotenv').config()
const Discord = require('discord.js')


const client = new Discord.Client()

//Login 
client.login(process.env.BOT_TOKEN).then(() => {
    console.log(`Discowin: Logged in`)
})