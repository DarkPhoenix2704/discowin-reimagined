require('dotenv').config()
const Discord = require('discord.js')


const client = new Discord.Client()

//Event Handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

//Setting Up Command Handler
client.commands = new Discord.Collection()
fs.readdir('./command/', (err, files) => {
    if (err) return
    files.forEach(file => {
        if (!file.endsWith('.js')) return //Skipping Files Which are not js files
        let command = require(`./command/${file}`)
        let commandName = file.split(".")[0]
        client.log(`Attempting to Load ${commandName}`)
        client.commands.set(commandName, command)
    })
})


//Login 
client.login(process.env.BOT_TOKEN).then(() => {
    console.log(`Discowin: Logged in`)
})