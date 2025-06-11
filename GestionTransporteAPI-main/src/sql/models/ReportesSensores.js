const { sql } = require('../../../sqlserver.js');

class ReportesSensores {
    static get tableName() {
        return 'ReportesSensores';
    }

    constructor(data) {
        this.id = data.id;
        this.reporte_id = data.reporte_id;
        this.lectura_id = data.lectura_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            reporte_id: { type: sql.Int },
            lectura_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = ReportesSensores;