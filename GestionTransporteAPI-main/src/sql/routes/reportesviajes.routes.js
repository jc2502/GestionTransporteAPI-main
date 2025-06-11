const express = require('express');
const router = express.Router();
const ReportesViajesController = require('../controllers/ReportesViajesController');

router.get('/', ReportesViajesController.getAll);
router.get('/:id', ReportesViajesController.getById);
router.post('/', ReportesViajesController.create);
router.put('/:id', ReportesViajesController.update);
router.delete('/:id', ReportesViajesController.delete);

module.exports = router;