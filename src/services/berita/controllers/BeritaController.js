const response = require("../../../utils/response");
const { GetAllBeritaRepository, GetDetailBeritaRepository, EditBeritaRepository, CreateBeritaRepository, DeleteBeritaRepository } = require('../repositories');

module.exports={
    getAllBerita: async (req, res) => {
        try {
            const berita = await GetAllBeritaRepository();
            return response({ res, data: berita,code:200, message: "all berita success" })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getDetailBerita: async (req, res) => {
        try {
            const { id_berita } = req.params;
            const berita = await GetDetailBeritaRepository({ id_berita });
            return response({ res, data: berita,code:200, message: "detail berita success" })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    createBerita: async (req, res) => {
        try {
            const { judul, isi, foto } = req.body;
            const tgl_posting = new Date();
            const tgl_expire = new Date();

            if (!judul || !foto) {
                throw new Error("Foto atau judul tidak ada")
            }
            
            newFileBerita = `${tgl_posting}-${foto}`
            const berita = await CreateBeritaRepository({ judul, isi, newFileBerita, tgl_posting, tgl_expire });
            return response({ res, data: berita,code:201, message: "create berita success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    editBerita: async (req, res) => {
        try {
            const { id_berita } = req.params;
            const { judul, isi, foto } = req.body;
            
            if (foto) {
                newFileImage = foto
            }

            const berita = await EditBeritaRepository({ id_berita, judul, isi, foto });
            return response({ res, data: berita,code:200, message: "edit berita success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    deleteBerita: async (req, res) => {
        try {
            const { id_berita } = req.params;
            const berita = await DeleteBeritaRepository({ id_berita });
            return response({ res, data: berita,code:200, message: "delete berita success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}