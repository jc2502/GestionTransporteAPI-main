const { sql } = require('../../../sqlserver.js');

class MovimientosInventario {
    static get tableName() {
        return 'MovimientosInventario';
    }

    constructor(data) {
        this.id = data.id;
        this.lote_id = data.lote_id;
        this.origen_id = data.origen_id;
        this.destino_id = data.destino_id;
        this.cantidad = data.cantidad;
        this.fecha = data.fecha;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            lote_id: { type: sql.Int },
            origen_id: { type: sql.Int },
            destino_id: { type: sql.Int },
            cantidad: { type: sql.Decimal },
            fecha: { type: sql.DateTime },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = MovimientosInventario;