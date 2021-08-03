const Discord = require('discord.js')
const getSessions = require('../api/getsession')


module.exports = {
    run: async (client, message) => {

        let {
            district_name
        } = await client.database.getUser(message.author.id)
        let { _id } = await client.database.getDistrict(district_name)
        let sessions = await getSessions(_id)
        await client.database.deleteSessionsWhere(_id)
        for (let i = 0; i < sessions.length; i++) {
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