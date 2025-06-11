const express = require('express');
const router = express.Router();
const CondicionesEnvioController = require('../controllers/CondicionesEnvioController');

router.get('/', CondicionesEnvioController.getAll);
router.get('/:id', CondicionesEnvioController.getById);
router.post('/', CondicionesEnvioController.create);
router.put('/:id', CondicionesEnvioController.update);
router.delete('/:id', CondicionesEnvioController.delete);

module.exports = router;