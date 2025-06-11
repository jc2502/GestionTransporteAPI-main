const { sql } = require('../../../sqlserver.js');

class DetalleVentas {
    static get tableName() {
        return 'DetalleVentas';
    }

    constructor(data) {
        this.id = data.id;
        this.venta_id = data.venta_id;
        this.producto_id = data.producto_id;
        this.cantidad = data.cantidad;
        this.precio_unitario = data.precio_unitario;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            venta_id: { type: sql.Int },
            producto_id: { type: sql.Int },
            cantidad: { type: sql.Decimal },
            precio_unitario: { type: sql.Decimal },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = DetalleVentas;