const { sql } = require('../../../sqlserver.js');

class EstadisticasEnvios {
    static get tableName() {
        return 'EstadisticasEnvios';
    }

    constructor(data) {
        this.id = data.id;
        this.viaje_id = data.viaje_id;
        this.promedio_temp = data.promedio_temp;
        this.promedio_humedad = data.promedio_humedad;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            viaje_id: { type: sql.Int },
            promedio_temp: { type: sql.Decimal },
            promedio_humedad: { type: sql.Decimal },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = EstadisticasEnvios;