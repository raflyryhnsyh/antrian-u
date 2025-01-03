const router = require('express').Router();

const { getAllVideo, getDetailVideo, createVideo, editVideo, deleteVideo } = require('../controllers/VideoController');
const cache = require('../../../middlewares/cache.js')
router.get('/video', getAllVideo);
router.get('/video/:id_video', getDetailVideo);
router.post('/video', createVideo);
router.post('/video/:id_video', editVideo);
router.delete('/video/:id_video', deleteVideo);
module.exports = router;