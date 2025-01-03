const {operator:OperatorLoketModel} = require('../../../utils/database')


module.exports= async () => {
    const operator = await OperatorLoketModel.findMany({
        include: {
          lokets: true,
        },
    });
    return operator;
}
