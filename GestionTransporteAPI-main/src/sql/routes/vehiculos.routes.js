const express = require('express');
const router = express.Router();
const VehiculosController = require('../controllers/VehiculosController');

router.get('/', VehiculosController.getAll);
router.get('/:id', VehiculosController.getById);
router.post('/', VehiculosController.create);
router.put('/:id', VehiculosController.update);
router.delete('/:id', VehiculosController.delete);

module.exports = router;