const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.login);
router.post('/registro', AuthController.registro);
router.post('/logout', AuthController.logout);
router.get('/verificar', AuthController.verificarToken);
router.post('/recuperar-password', AuthController.recuperarPassword);
router.post('/cambiar-password', AuthController.cambiarPassword);

module.exports = router;