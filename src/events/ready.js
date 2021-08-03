const updateDistrict = require('../update/updateDistrict')
module.exports = async (client) => {
    console.log('Discowin is ready')
    client.user.setAvatar('./bot.png')
    await updateDistrict(client);
}