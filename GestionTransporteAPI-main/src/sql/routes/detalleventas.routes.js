const express = require('express');
const router = express.Router();
const DetalleVentasController = require('../controllers/DetalleVentasController');

router.get('/', DetalleVentasController.getAll);
router.get('/:id', DetalleVentasController.getById);
router.post('/', DetalleVentasController.create);
router.put('/:id', DetalleVentasController.update);
router.delete('/:id', DetalleVentasController.delete);

module.exports = router;