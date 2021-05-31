const Discord = require('discord.js')

module.exports = member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'discowin')
    if (!channel) return
    
    const embedMessage = Discord.MessageEmbed()



    channel.send(`Hii <@${member.id}>\nWelcome to ${member.guild.name}\n!help for available commands`)

}