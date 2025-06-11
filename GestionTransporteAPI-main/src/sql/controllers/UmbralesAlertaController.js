const UmbralesAlertaService = require('../services/umbralesalertaservice');

class UmbralesAlertaController {
    static async getAll(req, res) {
        try {
            const data = await UmbralesAlertaService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await UmbralesAlertaService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'UmbralesAlerta no encontrado' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await UmbralesAlertaService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await UmbralesAlertaService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'UmbralesAlerta no encontrado' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await UmbralesAlertaService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'UmbralesAlerta no encontrado' });
            }
            res.json({ message: 'UmbralesAlerta eliminado' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UmbralesAlertaController;