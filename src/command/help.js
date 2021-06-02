const Discord = require("discord.js")

module.exports = {
    execute(client, message) {
        const embedMessage = new Discord.MessageEmbed()
            .setTitle('Available Commands')
            .setAuthor('Discowin', './bot.png', 'https://darkphoenix2704.github.io/discowin')
            .addField('!subscribe <age> <district>', 'To Subscribe for Cowin Notification')
            .addField('!unsubscribe', 'To unSubscribe from Cowin notification')
            .addField('!checknow', 'To Check for Vaccine Availability Now')
            .addField('!help', 'Show this message')
            .setFooter('Discowin')
            .setTimestamp()

        message.reply(embedMessage)
    }
}