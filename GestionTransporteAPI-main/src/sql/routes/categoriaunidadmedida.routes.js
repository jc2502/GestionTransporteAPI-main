const express = require('express');
const router = express.Router();
const CategoriaUnidadMedidaController = require('../controllers/CategoriaUnidadMedidaController');

router.get('/', CategoriaUnidadMedidaController.getAll);
router.get('/:id', CategoriaUnidadMedidaController.getById);
router.post('/', CategoriaUnidadMedidaController.create);
router.put('/:id', CategoriaUnidadMedidaController.update);
router.delete('/:id', CategoriaUnidadMedidaController.delete);

module.exports = router;