const express = require('express');
const router = express.Router();
const RegistrosCalidadController = require('../controllers/RegistrosCalidadController');

router.get('/', RegistrosCalidadController.getAll);
router.get('/:id', RegistrosCalidadController.getById);
router.post('/', RegistrosCalidadController.create);
router.put('/:id', RegistrosCalidadController.update);
router.delete('/:id', RegistrosCalidadController.delete);

module.exports = router;