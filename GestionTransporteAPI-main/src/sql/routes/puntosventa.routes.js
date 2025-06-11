const express = require('express');
const router = express.Router();
const PuntosVentaController = require('../controllers/PuntosVentaController');

router.get('/', PuntosVentaController.getAll);
router.get('/:id', PuntosVentaController.getById);
router.post('/', PuntosVentaController.create);
router.put('/:id', PuntosVentaController.update);
router.delete('/:id', PuntosVentaController.delete);

module.exports = router;