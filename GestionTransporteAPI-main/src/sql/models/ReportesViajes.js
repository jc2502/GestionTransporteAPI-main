const { sql } = require('../../../sqlserver.js');

class ReportesViajes {
    static get tableName() {
        return 'ReportesViajes';
    }

    constructor(data) {
        this.id = data.id;
        this.reporte_id = data.reporte_id;
        this.viaje_id = data.viaje_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            reporte_id: { type: sql.Int },
            viaje_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = ReportesViajes;