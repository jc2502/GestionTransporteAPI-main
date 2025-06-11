const express = require('express');
const router = express.Router();
const CategoriasProductosController = require('../controllers/CategoriasProductosController');

router.get('/', CategoriasProductosController.getAll);
router.get('/:id', CategoriasProductosController.getById);
router.post('/', CategoriasProductosController.create);
router.put('/:id', CategoriasProductosController.update);
router.delete('/:id', CategoriasProductosController.delete);

module.exports = router;