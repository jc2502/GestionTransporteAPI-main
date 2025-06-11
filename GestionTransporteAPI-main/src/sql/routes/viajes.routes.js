const express = require('express');
const router = express.Router();
const ViajesController = require('../controllers/ViajesController');

router.get('/', ViajesController.getAll);
router.get('/:id', ViajesController.getById);
router.post('/', ViajesController.create);
router.put('/:id', ViajesController.update);
router.delete('/:id', ViajesController.delete);

module.exports = router;