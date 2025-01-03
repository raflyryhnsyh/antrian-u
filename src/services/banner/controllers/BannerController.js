const response = require("../../../utils/response");
const { GetAllBannerRepository, GetDetailBannerRepository, EditBannerRepository, CreateBannerRepository, DeleteBannerRepository } = require('../repositories');

module.exports={
    getAllBanner: async (req, res) => {
        try {
            const banner = await GetAllBannerRepository();
            return response({ res, data: banner,code:200, message: "all banner success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getDetailBanner: async (req, res) => {
        try {
            const { id_banner } = req.params;
            const banner = await GetDetailBannerRepository({ id_banner });
            return response({ res, data: banner,code:200, message: "detail banner success" });
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    createBanner: async (req, res) => {
        try {
            const { judul, banner_img } = req.body;
            const tgl_posting = new Date().toISOString();

            if (!judul || !banner_img) {
                throw new Error("Banner atau judul tidak ada")
            }
            
            newFileImage = `${tgl_posting}-${banner_img}`
            const banner = await CreateBannerRepository({ judul, newFileImage, tgl_posting });
            return response({ res, data: banner,code:201, message: "create banner success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    editBanner: async (req, res) => {
        try {
            const { id_banner } = req.params;
            const { judul, banner_img } = req.body;
            
            if (banner_img) {
                const tgl_posting = new Date().toISOString();
                newFileImage = `${tgl_posting}-${banner_img}`
            }

            const banner = await EditBannerRepository({ id_banner, judul, newFileImage });
            return response({ res, data: banner,code:200, message: "edit banner success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    deleteBanner: async (req, res) => {
        try {
            const { id_banner } = req.params;
            const banner = await DeleteBannerRepository({ id_banner });
            return response({ res, data: banner,code:200, message: "delete banner success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}