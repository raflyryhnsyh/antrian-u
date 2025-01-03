const {loket:LoketModel} = require('../../../utils/database')


module.exports= async () => {
    const loket = await LoketModel.findMany();
    return loket;
}
