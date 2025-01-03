const response = require("../../../utils/response");
const { GetAllVideoRepository, GetDetailVideoRepository, EditVideoRepository, CreateVideoRepository, DeleteVideoRepository } = require('../repositories');

module.exports={
    getAllVideo: async (req, res) => {
        try {
            const video = await GetAllVideoRepository();
            return response({ res, data: video, code:200, message: "all video success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getDetailVideo: async (req, res) => {
        try {
            const { id_video } = req.params;
            const video = await GetDetailVideoRepository({ id_video });
            return response({ res, data: video, code:200, message: "detail video success" })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    createVideo: async (req, res) => {
        try {
            const { judul, video } = req.body;
            const tgl_posting = new Date();

            if (!judul || !video) {
                throw new Error("Banner atau judul tidak ada")
            }
            
            newFileVideo = `${tgl_posting}-${banner_img}`
            const videos = await CreateVideoRepository({ judul, newFileVideo, tgl_posting });
            return response({ res, data: videos, code:201, message: "create video success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    editVideo: async (req, res) => {
        try {
            const { id_video } = req.params;
            const { judul, video } = req.body;
  
            if (video) {
                const tgl_posting = new Date().toISOString();
                newFileVideo = `${tgl_posting}-${video}`
            }

            const videos = await EditVideoRepository({ id_video, judul, newFileVideo });
            return response({ res, data: videos, code:200, message: "edit video success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    deleteVideo: async (req, res) => {
        try {
            const { id_video } = req.params;
            const video = await DeleteVideoRepository({ id_video });
            return response({ res, data: video, code:200, message: "delete video success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}