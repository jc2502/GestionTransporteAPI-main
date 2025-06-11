const { sql } = require('../../../sqlserver.js');

class LecturasSensores {
    static get tableName() {
        return 'LecturasSensores';
    }

    constructor(data) {
        this.id = data.id;
        this.sensor_id = data.sensor_id;
        this.fecha = data.fecha;
        this.valor = data.valor;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            sensor_id: { type: sql.Int },
            fecha: { type: sql.DateTime },
            valor: { type: sql.Decimal },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = LecturasSensores;