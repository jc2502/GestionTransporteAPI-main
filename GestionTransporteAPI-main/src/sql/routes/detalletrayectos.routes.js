const express = require('express');
const router = express.Router();
const DetalleTrayectosController = require('../controllers/DetalleTrayectosController');

router.get('/', DetalleTrayectosController.getAll);
router.get('/:id', DetalleTrayectosController.getById);
router.post('/', DetalleTrayectosController.create);
router.put('/:id', DetalleTrayectosController.update);
router.delete('/:id', DetalleTrayectosController.delete);

module.exports = router;