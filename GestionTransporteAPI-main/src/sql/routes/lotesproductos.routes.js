const express = require('express');
const router = express.Router();
const LotesProductosController = require('../controllers/LotesProductosController');

router.get('/', LotesProductosController.getAll);
router.get('/:id', LotesProductosController.getById);
router.post('/', LotesProductosController.create);
router.put('/:id', LotesProductosController.update);
router.delete('/:id', LotesProductosController.delete);

module.exports = router;