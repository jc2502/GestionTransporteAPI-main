const express = require('express');
const router = express.Router();
const DetallePedidosController = require('../controllers/DetallePedidosController');

router.get('/', DetallePedidosController.getAll);
router.get('/:id', DetallePedidosController.getById);
router.post('/', DetallePedidosController.create);
router.put('/:id', DetallePedidosController.update);
router.delete('/:id', DetallePedidosController.delete);

module.exports = router;