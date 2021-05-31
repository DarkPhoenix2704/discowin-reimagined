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


//Login 
client.login(process.env.BOT_TOKEN).then(() => {
    console.log(`Discowin: Logged in`)
})