const Discord = require('discord.js')

module.exports = member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'discowin')
    if (!channel) return

    const embedMessage = new Discord.MessageEmbed()
        .setTitle('Welcome')
        .setAuthor('Discowin', '', 'https://darkphoenix2704.github.io/discowin')
        .addField(`Hi <@${member.id}>`, `Welcome to ${member.guild.name}\n!help for available commands`, false)
        .setFooter('Discowin')
        .setTimestamp()

    channel.send(embedMessage)

}