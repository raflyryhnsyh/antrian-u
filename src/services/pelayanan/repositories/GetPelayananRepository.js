const {pelayanan:PelayananModel} = require('../../../utils/database')

module.exports = async ({ id_pelayanan }) => {
  const pelayanan = await PelayananModel.findFirstOrThrow({
    where: { id_pelayanan:+id_pelayanan },
    select: {
      id_pelayanan: true,
      nama_pelayanan: true,
    },
  });
  return pelayanan;
};