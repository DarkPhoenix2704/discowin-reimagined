const Discord = require('discord.js')

module.exports = {
    execute(client,message){
        const {content, author} = message
        const args = content.slice(process.env.PREFIX.length).trim().split(/ +/);
        let age = args[1] ,district = args[2]
        if(age < 0){
            console.log('Age Can\'t be negative')
            return
        }
        try{
            await client.database.addUser(author.id,age,district)
            const embedMessage = new Discord.MessageEmbed()
            .setTitle('Subscribed Succesfully')
            .setAuthor('Discowin','./bot.png','https://darkphoenix2704.github.io/discowin')
            .addField('You are succesfully Subscribed to Cowin Notifications')
            .setFooter('Discowin')
            .setTimestamp()
            message.reply(embedMessage)
        }catch(e){
            console.log(`Exception   ${e}`)
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