const express = require('express');
const router = express.Router();
const AlmacenesController = require('../controllers/AlmacenesController');

router.get('/', AlmacenesController.getAll);
router.get('/:id', AlmacenesController.getById);
router.post('/', AlmacenesController.create);
router.put('/:id', AlmacenesController.update);
router.delete('/:id', AlmacenesController.delete);

module.exports = router;