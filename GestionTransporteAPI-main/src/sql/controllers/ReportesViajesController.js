const ReportesViajesService = require('../services/reportesviajesservice');

class ReportesViajesController {
    static async getAll(req, res) {
        try {
            const data = await ReportesViajesService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await ReportesViajesService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'ReportesViajes no encontrado' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await ReportesViajesService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await ReportesViajesService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'ReportesViajes no encontrado' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await ReportesViajesService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'ReportesViajes no encontrado' });
            }
            res.json({ message: 'ReportesViajes eliminado' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ReportesViajesController;