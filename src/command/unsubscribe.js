
module.exports = {
    execute(client, message){
        const {author} = message
        try {
            await client.database.removeUser(author.id)
            const embedMessage = new Discord.MessageEmbed()
            .setTitle('UnSubscribed Succesfully')
            .setAuthor('Discowin','./bot.png','https://darkphoenix2704.github.io/discowin')
            .addField('You are succesfully unSubscribed to Cowin Notifications')
            .setFooter('Discowin')
            .setTimestamp()
            message.reply(embedMessage)
        } catch (error) {
            console.log(error)
            const embedMessage = new Discord.MessageEmbed()
            .setTitle('Error Occured')
            .setAuthor('Discowin','./bot.png','https://darkphoenix2704.github.io/discowin')
            .addField('Some Error Occured. Please Try Again Later')
            .setFooter('Discowin')
            .setTimestamp()
            message.reply(embedMessage)
        }

    }
}