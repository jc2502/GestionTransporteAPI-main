const express = require('express');
const router = express.Router();
const TiposSensoresController = require('../controllers/TiposSensoresController');

router.get('/', TiposSensoresController.getAll);
router.get('/:id', TiposSensoresController.getById);
router.post('/', TiposSensoresController.create);
router.put('/:id', TiposSensoresController.update);
router.delete('/:id', TiposSensoresController.delete);

module.exports = router;