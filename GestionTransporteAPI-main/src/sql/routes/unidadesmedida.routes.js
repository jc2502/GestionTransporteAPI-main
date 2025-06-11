const express = require('express');
const router = express.Router();
const UnidadesMedidaController = require('../controllers/UnidadesMedidaController');

router.get('/', UnidadesMedidaController.getAll);
router.get('/:id', UnidadesMedidaController.getById);
router.post('/', UnidadesMedidaController.create);
router.put('/:id', UnidadesMedidaController.update);
router.delete('/:id', UnidadesMedidaController.delete);

module.exports = router;