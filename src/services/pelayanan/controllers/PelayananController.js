const response = require("../../../utils/response");
const { GetAllLoketRepository, GetOperatorLoketRepository, GetSubPelayananRepository, GetPelayananRepository, GetAllPelayananRepository } = require('../repositories');

module.exports={
    getJenisPelayanan: async (req, res) => {
        try {
            const allPelayanan = await GetAllPelayananRepository();
            return response({res,message: 'get all pelayanan success',data: allPelayanan, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getSubPelayanan: async (req, res) => {
        try {
            const { id_subpelayanan } = req.params;
            const subPelayanan = await GetSubPelayananRepository({ id_subpelayanan });
            return response({res,message: 'get sub pelayanan success',data: subPelayanan, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getPelayanan: async (req, res) => {
        try {
            const { id_pelayanan } = req.params;
            const pelayanan = await GetPelayananRepository({ id_pelayanan });
            return response({res,message: 'get pelayanan success',data: pelayanan, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getLoket: async (req, res) => {
        try {
            const loket = await GetAllLoketRepository();
            return response({ res, data: loket,code:200, message: "get loket success" })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getOperator: async (req, res) => {
        try {
            const operatorLoket = await GetOperatorLoketRepository();
            return response({ res, data: operatorLoket,code:200, message: "get operator dan loket success" })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
}