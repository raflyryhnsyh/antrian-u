const {operator:HistoryModel} = require('../../../utils/database')

module.exports= async () => {
    const history = await HistoryModel.findMany({
        select: {
            id_operator: true,
            nama: true,
            lokets: {
              select: {
                no_loket: true,
                pelayanan: {
                  select: {
                    nama_pelayanan: true,
                  },
                },
              },
            },
        },
    });
    return history;
}
