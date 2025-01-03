const {operator:HistoryModel} = require('../../../utils/database')

module.exports= async () => {
    const history = await HistoryModel.findMany({
        include: {
            operators: {
              select: {
                waktu_pelayanan: true,
                waktu_selesai_pelayanan: true,
              },
            },
        },
    });
    return history;
}
