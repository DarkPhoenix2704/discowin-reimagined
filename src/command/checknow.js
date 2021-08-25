const Discord = require('discord.js')
const getSessions = require('../api/getsession')


module.exports = {
    run: async (client, message) => {

        for (let i = 0; i < sessions.length; i++) {
            if (sessions[i].available_capacity === 0) {
                continue
            }
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