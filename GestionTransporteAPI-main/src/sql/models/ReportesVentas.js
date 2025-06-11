const { sql } = require('../../../sqlserver.js');

class ReportesVentas {
    static get tableName() {
        return 'ReportesVentas';
    }

    constructor(data) {
        this.id = data.id;
        this.reporte_id = data.reporte_id;
        this.venta_id = data.venta_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            reporte_id: { type: sql.Int },
            venta_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = ReportesVentas;