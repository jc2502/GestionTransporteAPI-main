const { sql } = require('../../../sqlserver.js');

class RegistrosCalidad {
    static get tableName() {
        return 'RegistrosCalidad';
    }

    constructor(data) {
        this.id = data.id;
        this.lote_id = data.lote_id;
        this.descripcion = data.descripcion;
        this.fecha = data.fecha;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            lote_id: { type: sql.Int },
            descripcion: { type: sql.NVarChar },
            fecha: { type: sql.DateTime },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = RegistrosCalidad;