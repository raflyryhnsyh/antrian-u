const response = require("../../../utils/response");
const { CreateOperatorAdminRepository, DetailOperatorAdminRepository, EditOperatorAdminRepository } = require('../repositories');

module.exports={
    detailOperatorAdmin: async (req, res) => {
        try {
            const { id_operator } = req.params;
            const admin = await DetailOperatorAdminRepository({ id_operator });
            return response({ res, data: admin,code:200, message: "get operator admin success" })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    createOperatorAdmin: async (req, res) => {
        try {
            const { id_operator, no_loket, nama, username, password } = req.body;

            if (!id_operator || !no_loket || !nama || !username || !password) {
                throw new Error("Data ada yang kosong")
            }

            const admin = await CreateOperatorAdminRepository({ id_operator, no_loket, nama, username, password });
            return response({ res, data: admin,code:201, message: "create operator admin success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    editOperatorAdmin: async (req, res) => {
        try {
            const { id_operator } = req.params;
            const { no_loket, nama, password } = req.body;
            const admin = await EditOperatorAdminRepository({ id_operator, no_loket, nama, password });
            return response({ res, data: admin,code:200, message: "edit operator admin success" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}