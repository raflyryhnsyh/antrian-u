const {operator:AdminModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { id_operator } = params;
  const admin = await AdminModel.findFirstOrThrow({where: {id_operator:+id_operator}});
  return admin;
};