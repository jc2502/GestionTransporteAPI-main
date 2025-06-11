const express = require('express');
const router = express.Router();
const RolesController = require('../controllers/RolesController');

router.get('/', RolesController.getAll);
router.get('/:id', RolesController.getById);
router.post('/', RolesController.create);
router.put('/:id', RolesController.update);
router.delete('/:id', RolesController.delete);

module.exports = router;