const Discord = require("discord.js")

module.exports = {
    run: async (client, message) => {
        //Returns a help message on !help
        const embedMessage = new Discord.MessageEmbed()
            .setTitle('Available Commands')
            .setAuthor('Discowin', '', 'https://darkphoenix2704.github.io/discowin')
            .addField('!subscribe <age> <district>', 'To Subscribe for Cowin Notification')
            .addField('!unsubscribe', 'To unSubscribe from Cowin notification')
            .addField('!checknow', 'To Check for Vaccine Availability Now')
            .addField('!help', 'Show this message')
            .setFooter('Discowin')
            .setTimestamp()

        message.reply(embedMessage)
    }
}