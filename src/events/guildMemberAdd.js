const Discord = require('discord.js')

module.exports = member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'discowin')
    if (!channel) return

    const embedMessage = new Discord.MessageEmbed()
        .setTitle('Welcome')
        .setAuthor('Discowin', './bot.png', 'https://darkphoenix2704.github.io/discowin')
        .addField(`Hi <@${member.id}>\nWelcome to ${member.guild.name}\n!help for available commands`)
        .setFooter('Discowin')
        .setTimestamp()

    message.reply(embedMessage)
}