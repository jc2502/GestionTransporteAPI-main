const PermisosService = require('../services/permisosservice');

class PermisosController {
    static async getAll(req, res) {
        try {
            const data = await PermisosService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await PermisosService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Permisos no encontrado' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await PermisosService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await PermisosService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Permisos no encontrado' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await PermisosService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'Permisos no encontrado' });
            }
            res.json({ message: 'Permisos eliminado' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = PermisosController;