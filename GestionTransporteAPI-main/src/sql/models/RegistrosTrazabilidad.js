const { sql } = require('../../../sqlserver.js');

class RegistrosTrazabilidad {
    static get tableName() {
        return 'RegistrosTrazabilidad';
    }

    constructor(data) {
        this.id = data.id;
        this.lote_id = data.lote_id;
        this.ubicacion = data.ubicacion;
        this.fecha = data.fecha;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            lote_id: { type: sql.Int },
            ubicacion: { type: sql.NVarChar },
            fecha: { type: sql.DateTime },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = RegistrosTrazabilidad;