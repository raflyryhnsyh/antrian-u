const {jenis_pelayanan:PelayananModel} = require('../../../utils/database')


module.exports= async () => {
    const pelayanan = await PelayananModel.findMany();
    return pelayanan;
}
