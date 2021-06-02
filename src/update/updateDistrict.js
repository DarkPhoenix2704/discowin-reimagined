const getDistrict = require('../api/getdistrict')

module.exports = async (client) => {
    await client.database.deleteDistricts()
    for (let i = 1; i <= 37; i++) {
        let districtList = await getDistrict.getDistrict(i)
        for (let j = 0; j < districtList.length; j++) {
            let {
                district_id,
                district_name
            } = districtList[i]
            await client.database.addDistrict(district_id, district_name)
        }
    }
}