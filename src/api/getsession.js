const axios = require('axios')

const baseurl = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='


module.exports.getSession = async (district) => {
    let requestUrl = baseurl + district + '&date=' + getDate()
    console.log(requestUrl)
    const req = axios.get(requestUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0',
        }
    })
    const res = req.then((value) => value.data.sessions)
    const err = req.catch((err) => err)
    return res
}

function getDate() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    const yyyy = today.getFullYear()
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = dd + '-' + mm + '-' + yyyy
    return today
}