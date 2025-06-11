const express = require('express');
const router = express.Router();
const MovimientosInventarioController = require('../controllers/MovimientosInventarioController');

router.get('/', MovimientosInventarioController.getAll);
router.get('/:id', MovimientosInventarioController.getById);
router.post('/', MovimientosInventarioController.create);
router.put('/:id', MovimientosInventarioController.update);
router.delete('/:id', MovimientosInventarioController.delete);

module.exports = router;