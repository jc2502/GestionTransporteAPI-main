const express = require('express');
const router = express.Router();
const PedidosController = require('../controllers/PedidosController');

router.get('/', PedidosController.getAll);
router.get('/:id', PedidosController.getById);
router.post('/', PedidosController.create);
router.put('/:id', PedidosController.update);
router.delete('/:id', PedidosController.delete);

module.exports = router;