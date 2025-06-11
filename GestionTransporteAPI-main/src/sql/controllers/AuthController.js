const AuthService = require('../services/AuthService');

class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const token = await AuthService.login(email, password);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    }

    static async registro(req, res) {
        const { email, password, nombre, apellido } = req.body;

        try {
            const usuario = await AuthService.registro(email, password, nombre, apellido);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ error: 'Error al registrar el usuario' });
        }
    }

    static async logout(req, res) {
        try {
            await AuthService.logout(req.user.id);
            res.status(200).json({ message: 'Cierre de sesión exitoso' });
        } catch (error) {
            res.status(500).json({ error: 'Error al cerrar sesión' });
        }
    }

    static async verificarToken(req, res) {
        try {
            const usuario = await AuthService.verificarToken(req.user.id);
            res.status(200).json(usuario);
        } catch (error) {
            res.status(401).json({ error: 'Token inválido' });
        }
    }

    static async recuperarPassword(req, res) {
        const { email } = req.body;

        try {
            const resultado = await AuthService.recuperarPassword(email);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(400).json({ error: 'Error al recuperar la contraseña' });
        }
    }

    static async cambiarPassword(req, res) {
        const { password, token } = req.body;

        try {
            const resultado = await AuthService.cambiarPassword(password, token);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(400).json({ error: 'Error al cambiar la contraseña' });
        }
    }
}

module.exports = AuthController;