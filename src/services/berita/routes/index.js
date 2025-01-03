const router = require('express').Router();

const { getAllBerita, getDetailBerita, createBerita, editBerita, deleteBerita } = require('../controllers/BeritaController.js');
const cache = require('../../../middlewares/cache.js')
router.get('/berita', getAllBerita);
router.get('/berita/:id_berita', getDetailBerita);
router.post('/berita', createBerita);
router.post('/berita/:id_berita', editBerita);
router.delete('/berita/:id_berita', deleteBerita);
module.exports = router;