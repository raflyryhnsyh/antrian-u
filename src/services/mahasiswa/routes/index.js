const router = require('express').Router();

const { getAllMahasiswa, getMahasiswa, createMahasiswa, editMahasiswa, deleteMahasiswa } = require('../controllers/MahasiswaController');
const cache = require('../../../middlewares/cache.js')
router.get('/mahasiswa', getAllMahasiswa);
router.get('/mahasiswa/:rfid', getMahasiswa);
router.post('/mahasiswa', createMahasiswa);
router.post('/mahasiswa/:rfid', editMahasiswa);
router.delete('/mahasiswa/:rfid', deleteMahasiswa);
module.exports = router;