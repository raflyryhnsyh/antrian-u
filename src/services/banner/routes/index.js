const router = require('express').Router();

const { getAllBanner, getDetailBanner, createBanner, editBanner, deleteBanner } = require('../controllers/BannerController.js');
const cache = require('../../../middlewares/cache.js')
router.get('/banner', getAllBanner);
router.get('/banner/:id_banner', getDetailBanner);
router.post('/banner', createBanner);
router.post('/banner/:id_banner', editBanner);
router.delete('/banner/:id_banner', deleteBanner);
module.exports = router;