const {antrian_terlayani:AntrianModel} = require('../../../utils/database')

module.exports= async ({tahun, bulan, hari}) => {
    const history = await AntrianModel.findMany();
    return history;
}
