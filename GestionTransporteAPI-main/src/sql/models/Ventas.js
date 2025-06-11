const { sql } = require('../../../sqlserver.js');

class Ventas {
    static get tableName() {
        return 'Ventas';
    }

    constructor(data) {
        this.id = data.id;
        this.punto_venta_id = data.punto_venta_id;
        this.fecha = data.fecha;
        this.total = data.total;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            punto_venta_id: { type: sql.Int },
            fecha: { type: sql.DateTime },
            total: { type: sql.Decimal },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Ventas;