const getSession = require('../api/getsession')
module.exports = async (client) => {
    await client.database.deleteSessions()
    let userList = await client.database.getUsers()
    for (let i = 0; i < userList.length; i++) {
        let {
            district_name
        } = userList[i]
        let {
            _id
        } = await client.database.getDistrict(district_name)
        let sessions = await getSession(_id)
        for (let j = 0; j < sessions.length; j++) {
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
            } = sessions[j]
            if (available_capacity !== 0) {
                await client.database.addSession(center_id, district_name, name, vaccine, min_age_limit, fee_type, fee, available_capacity, date)
            }
        }
    }
}