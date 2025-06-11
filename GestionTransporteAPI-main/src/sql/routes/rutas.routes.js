const express = require('express');
const router = express.Router();
const RutasController = require('../controllers/RutasController');

router.get('/', RutasController.getAll);
router.get('/:id', RutasController.getById);
router.post('/', RutasController.create);
router.put('/:id', RutasController.update);
router.delete('/:id', RutasController.delete);

module.exports = router;