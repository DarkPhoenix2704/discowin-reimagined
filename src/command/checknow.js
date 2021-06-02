const Discord = require('discord.js')
const getSessions = require('../api/getsession')


module.exports = {
    execute(client ,message) {
        let {_age,district_name} = await client.database.getUser(message.author.id)
        let district_id = await client.database.getDistrict(district_name)
        let sessions = await getSessions(district_id)
        await client.database.deleteSessionsWhere(district_id)
        for(let i = 0;i < sessions.length; i++){
            let {
                center_id,
                district_name,
                name,
                vaccine,
                min_age_limit,
                fee_type,
                fee,
                available_capacity,
                date
            } = sessions[i]
            await client.database.addSession(center_id, district_name, name, vaccine, min_age_limit, fee_type, fee, available_capacity, date)
        }
    }
}