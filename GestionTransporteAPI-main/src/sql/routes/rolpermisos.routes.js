const express = require('express');
const router = express.Router();
const RolPermisosController = require('../controllers/RolPermisosController');

router.get('/', RolPermisosController.getAll);
router.get('/:id', RolPermisosController.getById);
router.post('/', RolPermisosController.create);
router.put('/:id', RolPermisosController.update);
router.delete('/:id', RolPermisosController.delete);

module.exports = router;