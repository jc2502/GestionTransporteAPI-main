const { sql } = require('../../../sqlserver.js');

class Sensores {
    static get tableName() {
        return 'Sensores';
    }

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.tipo_sensor_id = data.tipo_sensor_id;
        this.ubicacion = data.ubicacion;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            nombre: { type: sql.NVarChar },
            tipo_sensor_id: { type: sql.Int },
            ubicacion: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Sensores;