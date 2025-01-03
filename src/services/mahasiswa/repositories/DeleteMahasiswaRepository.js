const {mahasiswa:MahasiswaModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { rfid } = params;
  
  const mahasiswa = await MahasiswaModel.delete({where: {no_rfid: rfid}});
  return mahasiswa;
};