const { sql } = require('../../../sqlserver.js');

class IncidentesTransporte {
    static get tableName() {
        return 'IncidentesTransporte';
    }

    constructor(data) {
        this.id = data.id;
        this.viaje_id = data.viaje_id;
        this.descripcion = data.descripcion;
        this.fecha = data.fecha;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            viaje_id: { type: sql.Int },
            descripcion: { type: sql.NVarChar },
            fecha: { type: sql.DateTime },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = IncidentesTransporte;