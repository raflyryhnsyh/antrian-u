const {operator:HistoryModel} = require('../../../utils/database')

module.exports= async ({ id_operator }) => {
    const history = await HistoryModel.findUnique({
        where: { id_operator: id_operator },
        include: {
          pelayanan: true,
        },
    });
    return history;
}
