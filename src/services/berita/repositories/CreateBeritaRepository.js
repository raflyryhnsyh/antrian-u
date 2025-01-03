const {berita:BeritaModel} = require('../../../utils/database')

module.exports= async ({ judul, isi, newFileBerita, tgl_posting, tgl_expire }) => {
    const berita = await BeritaModel.create({
        data: {
            judul,
            isi,
            foto: newFileBerita,
            tgl_posting,
            tgl_expire
        }
    });
    return berita;
}