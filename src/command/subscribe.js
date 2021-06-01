const { addUser } = require('../database')
const userModel = require('../model/user')

module.exports = async (client,message) => {
    const {content, author} = message
    const args = content.slice(process.env.PREFIX.length).trim().split(/ +/);
    let age = args[1] ,district = args[2]
    if(age < 0){
        console.log('Age Can\'t be negative')
        return
    }
    await addUser(author.id,age,district)
}