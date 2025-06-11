const express = require('express');
const router = express.Router();
const LecturasSensoresController = require('../controllers/LecturasSensoresController');

router.get('/', LecturasSensoresController.getAll);
router.get('/:id', LecturasSensoresController.getById);
router.post('/', LecturasSensoresController.create);
router.put('/:id', LecturasSensoresController.update);
router.delete('/:id', LecturasSensoresController.delete);

module.exports = router;