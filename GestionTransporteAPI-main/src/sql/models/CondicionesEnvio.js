const { sql } = require('../../../sqlserver.js');

class CondicionesEnvio {
    static get tableName() {
        return 'CondicionesEnvio';
    }

    constructor(data) {
        this.id = data.id;
        this.viaje_id = data.viaje_id;
        this.sensor_id = data.sensor_id;
        this.lectura_id = data.lectura_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            viaje_id: { type: sql.Int },
            sensor_id: { type: sql.Int },
            lectura_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = CondicionesEnvio;