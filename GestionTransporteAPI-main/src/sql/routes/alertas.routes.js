const express = require('express');
const router = express.Router();
const AlertasController = require('../controllers/AlertasController');

router.get('/', AlertasController.getAll);
router.get('/:id', AlertasController.getById);
router.post('/', AlertasController.create);
router.put('/:id', AlertasController.update);
router.delete('/:id', AlertasController.delete);

module.exports = router;