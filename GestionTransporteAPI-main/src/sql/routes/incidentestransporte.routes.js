const express = require('express');
const router = express.Router();
const IncidentesTransporteController = require('../controllers/IncidentesTransporteController');

router.get('/', IncidentesTransporteController.getAll);
router.get('/:id', IncidentesTransporteController.getById);
router.post('/', IncidentesTransporteController.create);
router.put('/:id', IncidentesTransporteController.update);
router.delete('/:id', IncidentesTransporteController.delete);

module.exports = router;