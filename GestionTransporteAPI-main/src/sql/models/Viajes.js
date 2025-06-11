const { sql } = require('../../../sqlserver.js');

class Viajes {
    static get tableName() {
        return 'Viajes';
    }

    constructor(data) {
        this.id = data.id;
        this.vehiculo_id = data.vehiculo_id;
        this.ruta_id = data.ruta_id;
        this.fecha_inicio = data.fecha_inicio;
        this.fecha_fin = data.fecha_fin;
        this.chofer_id = data.chofer_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            vehiculo_id: { type: sql.Int },
            ruta_id: { type: sql.Int },
            fecha_inicio: { type: sql.DateTime },
            fecha_fin: { type: sql.DateTime },
            chofer_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Viajes;