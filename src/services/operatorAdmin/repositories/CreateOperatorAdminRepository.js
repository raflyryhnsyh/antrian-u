const {operator:AdminModel} = require('../../../utils/database')

module.exports= async ({ no_loket, nama, username, password }) => {
    const admin = await AdminModel.create({
        data: {
            no_loket,
            nama,
            username,
            password
        }
    });
    return admin;
}