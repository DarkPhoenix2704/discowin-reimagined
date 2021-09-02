const getSessions = require('../api/getsession')
const dm = require('../dm')

module.exports = {
    run: async (client, message) => {
        let usersData = await client.database.getUser(message.author.id)
        let {district_name} = await usersData[0]
        let district = await client.database.getDistrict(district_name)
        let _id = district[0]._id
        await client.database.deleteSessionWhere(district[0].district)
        let sessions = await getSessions.getSession(_id)

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
            } = await sessions[i]
            await client.database.addSession(center_id, district_name, name, vaccine, min_age_limit, fee_type, fee, available_capacity, date)
        }
        await dm(client, usersData)

    }
}