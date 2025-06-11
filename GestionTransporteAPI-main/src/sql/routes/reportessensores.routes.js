const express = require('express');
const router = express.Router();
const ReportesSensoresController = require('../controllers/ReportesSensoresController');

router.get('/', ReportesSensoresController.getAll);
router.get('/:id', ReportesSensoresController.getById);
router.post('/', ReportesSensoresController.create);
router.put('/:id', ReportesSensoresController.update);
router.delete('/:id', ReportesSensoresController.delete);

module.exports = router;