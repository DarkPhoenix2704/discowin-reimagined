module.exports = async (client, users) => {
    for (let i = 0; i < users.length; i++) {
        let {district_name, age} = users[i]
        let sessions = await client.database.getSessions(district_name, age)
        let message = `Nearby Available Vaccination Centres \n\n`
        message = message + `Date\tLocation\tVaccine\tAvailableVaccine\tFeeType\n`
        for (let j = 0; j < sessions.length; j++) {
            const {date, name, vaccine, available_capacity, fee_type} = sessions[j]
            message = message + `${date}\t${name}\t${vaccine}\t${available_capacity}\t${fee_type}\n`
        }
        let {_id} = users[i]
        const user = await client.users.fetch(_id)
        await user.send(message)
    }
}