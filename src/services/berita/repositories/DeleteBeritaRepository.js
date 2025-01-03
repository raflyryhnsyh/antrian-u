const {berita:BeritaModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { id_berita } = params;
  
  const berita = await BeritaModel.delete({where: {id_berita:+id_berita}});
  return berita;
};