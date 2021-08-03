require('dotenv').config()
const Discord = require('discord.js');
const mongo = require('mongoose');
const fs = require('fs')


const client = new Discord.Client()

//Adding to Client
client.commands = new Discord.Collection()
client.database = require('./database/database')

//Event Handler
fs.readdir("./src/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  })
})

//Setting Up Command Handler
fs.readdir('./src/command/', (err, files) => {
  if (err) return
  files.forEach(file => {
    if (!file.endsWith('.js')) return //Skipping Files Which are not js files
    let command = require(`./command/${file}`)
    let commandName = file.split(".")[0]
    client.commands.set(commandName, command)
  })
})

//Connect to mongoDb
const server = process.env.DBSERVER
const database = 'discowin'
mongo.connect(`mongodb://${server}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })


//Login 
client.login(process.env.BOT_TOKEN).then(() => {
  console.log(`Discowin: Logged in`)
})