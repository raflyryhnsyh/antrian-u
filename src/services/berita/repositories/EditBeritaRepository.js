const {berita:BeritaModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { id_berita, judul, isi, foto } = params;

  const berita = await BeritaModel.update({
    where: {
        id_berita:+id_berita
    },
    data: {
        judul,
        isi,
        foto
    }
  });
  return berita;
};