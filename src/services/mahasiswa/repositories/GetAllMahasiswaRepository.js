const {mahasiswa:MahasiswaModel} = require('../../../utils/database')


module.exports= async () => {
    const mahasiswa = await MahasiswaModel.findMany();
    return mahasiswa;
}
