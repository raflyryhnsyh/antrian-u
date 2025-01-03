const response = require("../../../utils/response");
const { GetAllMahasiswaRepository, GetMahasiswaRepository, CreateMahasiswaRepository, EditMahasiswaRepository, DeleteMahasiswaRepository } = require('../repositories');

module.exports={
    getAllMahasiswa: async (req, res) => {
        try {
            const mahasiswa = await GetAllMahasiswaRepository();
            return response({res,message: 'all mahasiswa success',data: { mahasiswa }, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getMahasiswa: async (req, res) => {
        try {
            const { rfid } = req.params;
            // const redis = req.app.get('redis');
            console.log(rfid)
            const mahasiswa = await GetMahasiswaRepository({ rfid });
            return response({ res, data: mahasiswa,code:200, message: "get mahasiswa success" })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    createMahasiswa: async (req, res) => {
        try {
            const { rfid, nim, nama, prodi } = req.body;

            if (!rfid || !nim || !nama || !prodi) {
                throw new Error("Data ada yang kosong")
            }

            const mahasiswa = await CreateMahasiswaRepository({ rfid, nim, nama, prodi });
            return response({ res, data: mahasiswa,code:201, message: "create mahasiswa success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    editMahasiswa: async (req, res) => {
        try {
            const { rfid } = req.params;
            const { nama, prodi } = req.body;
            const mahasiswa = await EditMahasiswaRepository({ rfid, nama, prodi });
            return response({ res, data: mahasiswa,code:200, message: "edit mahasiswa success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    deleteMahasiswa: async (req, res) => {
        try {
            const { rfid } = req.params;
            const mahasiswa = await DeleteMahasiswaRepository({ rfid });
            return response({ res, data: mahasiswa,code:200, message: "delete mahasiswa success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}