const RegistrosCalidadService = require('../services/registroscalidadservice');

class RegistrosCalidadController {
    static async getAll(req, res) {
        try {
            const data = await RegistrosCalidadService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await RegistrosCalidadService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'RegistrosCalidad no encontrado' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await RegistrosCalidadService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await RegistrosCalidadService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'RegistrosCalidad no encontrado' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await RegistrosCalidadService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'RegistrosCalidad no encontrado' });
            }
            res.json({ message: 'RegistrosCalidad eliminado' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = RegistrosCalidadController;