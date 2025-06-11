const { sql } = require('../../../sqlserver.js');

class DetalleTrayectos {
    static get tableName() {
        return 'DetalleTrayectos';
    }

    constructor(data) {
        this.id = data.id;
        this.viaje_id = data.viaje_id;
        this.ubicacion_actual = data.ubicacion_actual;
        this.hora = data.hora;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            viaje_id: { type: sql.Int },
            ubicacion_actual: { type: sql.NVarChar },
            hora: { type: sql.DateTime },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = DetalleTrayectos;