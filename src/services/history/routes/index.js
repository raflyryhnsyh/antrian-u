const router = require('express').Router();

const { getOperatorHistory, getOperatorWaktuTerlayaniHistory, postDetailHistory, postAllHistory, postLoketHistory, postPelayananHistory } = require('../controllers/HistoryController');
router.get('/history/operator', getOperatorHistory);
router.get('/history/operator/waktu_melayani', getOperatorWaktuTerlayaniHistory);

router.post('/historyall', postAllHistory);
router.post('/historydetail', postDetailHistory);

// router.post('/history', postAllUsers);
router.post('/history/loket', postLoketHistory);
router.post('/history/pelayanan', postPelayananHistory);
module.exports = router;