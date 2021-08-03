const axios = require('axios')

const baseUrl = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/'


module.exports.getDistrict = async (state_id) => {
    
    let requestUrl = baseUrl + state_id
    
    console.log(requestUrl)

    const req = axios.get(requestUrl, {

        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0',
        }
    
    })
    
    const res = req.then((value) => value.data.districts)

    const err = req.catch((err) => console.log(err))

    return res
    
}