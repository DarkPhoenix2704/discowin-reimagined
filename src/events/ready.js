const updateDistrict = require('../update/updateDistrict')
const database = require('../database/database')
module.exports = async (client) => {
    console.log('Discowin is ready')
    client.user.setAvatar('./bot.png')
    await updateDistrict(client);
    await database.deleteSessions()
}