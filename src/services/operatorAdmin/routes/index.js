const router = require('express').Router();

const { createOperatorAdmin, detailOperatorAdmin, editOperatorAdmin } = require('../controllers/OperatorAdminController.js');
const cache = require('../../../middlewares/cache.js')
router.get('/operator/:id_operator', detailOperatorAdmin);
router.post('/operator', createOperatorAdmin);
router.post('/operator/:id_operator', editOperatorAdmin);
module.exports = router;