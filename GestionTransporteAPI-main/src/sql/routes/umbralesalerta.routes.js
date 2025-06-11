const express = require('express');
const router = express.Router();
const UmbralesAlertaController = require('../controllers/UmbralesAlertaController');

router.get('/', UmbralesAlertaController.getAll);
router.get('/:id', UmbralesAlertaController.getById);
router.post('/', UmbralesAlertaController.create);
router.put('/:id', UmbralesAlertaController.update);
router.delete('/:id', UmbralesAlertaController.delete);

module.exports = router;