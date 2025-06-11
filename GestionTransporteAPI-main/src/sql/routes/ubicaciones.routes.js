const express = require('express');
const router = express.Router();
const UbicacionesController = require('../controllers/UbicacionesController');

router.get('/', UbicacionesController.getAll);
router.get('/:id', UbicacionesController.getById);
router.post('/', UbicacionesController.create);
router.put('/:id', UbicacionesController.update);
router.delete('/:id', UbicacionesController.delete);

module.exports = router;