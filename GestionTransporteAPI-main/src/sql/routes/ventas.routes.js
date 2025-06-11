const express = require('express');
const router = express.Router();
const VentasController = require('../controllers/VentasController');

router.get('/', VentasController.getAll);
router.get('/:id', VentasController.getById);
router.post('/', VentasController.create);
router.put('/:id', VentasController.update);
router.delete('/:id', VentasController.delete);

module.exports = router;