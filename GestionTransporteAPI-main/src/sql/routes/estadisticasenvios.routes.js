const express = require('express');
const router = express.Router();
const EstadisticasEnviosController = require('../controllers/EstadisticasEnviosController');

router.get('/', EstadisticasEnviosController.getAll);
router.get('/:id', EstadisticasEnviosController.getById);
router.post('/', EstadisticasEnviosController.create);
router.put('/:id', EstadisticasEnviosController.update);
router.delete('/:id', EstadisticasEnviosController.delete);

module.exports = router;