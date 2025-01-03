const {mahasiswa:MahasiswaModel} = require('../../../utils/database')

module.exports= async ({ rfid, nim, nama, prodi }) => {
    const mahasiswa = await MahasiswaModel.create({
        data: {
            no_rfid: rfid,
            nim,
            nama,
            prodi
        }
    });
    return mahasiswa;
}