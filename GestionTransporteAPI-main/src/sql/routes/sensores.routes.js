const express = require('express');
const router = express.Router();
const SensoresController = require('../controllers/SensoresController');

router.get('/', SensoresController.getAll);
router.get('/:id', SensoresController.getById);
router.post('/', SensoresController.create);
router.put('/:id', SensoresController.update);
router.delete('/:id', SensoresController.delete);

module.exports = router;