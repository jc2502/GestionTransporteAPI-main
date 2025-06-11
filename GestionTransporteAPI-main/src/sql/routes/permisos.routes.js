const express = require('express');
const router = express.Router();
const PermisosController = require('../controllers/PermisosController');

router.get('/', PermisosController.getAll);
router.get('/:id', PermisosController.getById);
router.post('/', PermisosController.create);
router.put('/:id', PermisosController.update);
router.delete('/:id', PermisosController.delete);

module.exports = router;