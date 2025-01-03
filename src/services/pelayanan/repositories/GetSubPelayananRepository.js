const {sub_pelayanan:subPelayananModel} = require('../../../utils/database')

module.exports = async ({ id_subpelayanan }) => {
  const subPelayanan = await subPelayananModel.findFirstOrThrow({
    where: {id_subpelayanan:+id_subpelayanan},
    select: {
      id_subpelayanan: true,
      nama_subpelayanan: true,
    },
  });
  return subPelayanan;
};