const express = require('express');
const router = express.Router();
const ReportesController = require('../controllers/ReportesController');

router.get('/', ReportesController.getAll);
router.get('/:id', ReportesController.getById);
router.post('/', ReportesController.create);
router.put('/:id', ReportesController.update);
router.delete('/:id', ReportesController.delete);

module.exports = router;