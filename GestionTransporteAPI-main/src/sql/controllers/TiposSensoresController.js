const TiposSensoresService = require('../services/tipossensoresservice');

class TiposSensoresController {
    static async getAll(req, res) {
        try {
            const data = await TiposSensoresService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await TiposSensoresService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'TiposSensores no encontrado' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await TiposSensoresService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await TiposSensoresService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'TiposSensores no encontrado' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await TiposSensoresService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'TiposSensores no encontrado' });
            }
            res.json({ message: 'TiposSensores eliminado' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = TiposSensoresController;