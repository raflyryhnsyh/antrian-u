const {mahasiswa:MahasiswaModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { rfid, nama, prodi } = params;

  const mahasiswa = await MahasiswaModel.update({
    where: {
        no_rfid: rfid
    },
    data: {
        nama,
        prodi
    }
  });
  return mahasiswa;
};