const { sql } = require('../../../sqlserver.js');

class DetallePedidos {
    static get tableName() {
        return 'DetallePedidos';
    }

    constructor(data) {
        this.id = data.id;
        this.pedido_id = data.pedido_id;
        this.producto_id = data.producto_id;
        this.cantidad = data.cantidad;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            pedido_id: { type: sql.Int },
            producto_id: { type: sql.Int },
            cantidad: { type: sql.Decimal },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = DetallePedidos;