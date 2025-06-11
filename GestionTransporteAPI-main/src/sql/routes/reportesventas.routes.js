const express = require('express');
const router = express.Router();
const ReportesVentasController = require('../controllers/ReportesVentasController');

router.get('/', ReportesVentasController.getAll);
router.get('/:id', ReportesVentasController.getById);
router.post('/', ReportesVentasController.create);
router.put('/:id', ReportesVentasController.update);
router.delete('/:id', ReportesVentasController.delete);

module.exports = router;