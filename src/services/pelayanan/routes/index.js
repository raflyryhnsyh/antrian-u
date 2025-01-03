const router = require('express').Router();

const { getJenisPelayanan, getLoket, getOperator, getPelayanan, getSubPelayanan } = require('../controllers/PelayananController.js');
const cache = require('../../../middlewares/cache.js')
router.get('/pelayanan', getJenisPelayanan);
router.get('/pelayanan/operator', getOperator);
router.get('/pelayanan/loket', getLoket);
router.get('/pelayanan/:id_pelayanan', getPelayanan);
router.get('/pelayanan/sub/:id_subpelayanan', getSubPelayanan);
module.exports = router;