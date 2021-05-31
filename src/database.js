const mongoose = require('mongoose')


const server = process.env.DBSERVER
const database = 'discowin'

class Database{
    constructor(){
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
        }).then(() => {
            console.log('Database connection successful')
          })
          .catch(err => {
            console.error('Database connection error')
          })
     }
}