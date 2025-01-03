const router = require('express').Router();

const mahasiswaRoutes = require('../services/mahasiswa/routes')
const videoRoutes = require('../services/video/routes')
const bannerRoutes = require('../services/banner/routes')
const beritaRoutes = require('../services/berita/routes')
const operatorAdminRoutes = require('../services/operatorAdmin/routes')
const pelayananRoutes = require('../services/pelayanan/routes')
const historyRoutes = require('../services/history/routes')

router.use('/', mahasiswaRoutes);
router.use('/', videoRoutes);
router.use('/', bannerRoutes);
router.use('/', beritaRoutes);
router.use('/', operatorAdminRoutes);
router.use('/', pelayananRoutes);
router.use('/', historyRoutes);

module.exports = router;
