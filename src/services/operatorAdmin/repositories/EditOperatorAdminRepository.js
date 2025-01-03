const {operator:AdminModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { id_operator, no_loket, nama, password } = params;

  const admin = await AdminModel.update({
    where: {
        id_operator
    },
    data: {
        no_loket,
        nama,
        password
    }
  });
  return admin;
};