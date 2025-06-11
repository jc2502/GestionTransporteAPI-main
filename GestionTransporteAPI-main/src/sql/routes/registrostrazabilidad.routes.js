const express = require('express');
const router = express.Router();
const RegistrosTrazabilidadController = require('../controllers/RegistrosTrazabilidadController');

router.get('/', RegistrosTrazabilidadController.getAll);
router.get('/:id', RegistrosTrazabilidadController.getById);
router.post('/', RegistrosTrazabilidadController.create);
router.put('/:id', RegistrosTrazabilidadController.update);
router.delete('/:id', RegistrosTrazabilidadController.delete);

module.exports = router;