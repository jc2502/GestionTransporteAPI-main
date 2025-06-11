const express = require('express');
const router = express.Router();
const ViajesPedidosController = require('../controllers/ViajesPedidosController');

router.get('/', ViajesPedidosController.getAll);
router.get('/:id', ViajesPedidosController.getById);
router.post('/', ViajesPedidosController.create);
router.put('/:id', ViajesPedidosController.update);
router.delete('/:id', ViajesPedidosController.delete);

module.exports = router;