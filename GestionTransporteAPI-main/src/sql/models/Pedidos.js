const { sql } = require('../../../sqlserver.js');

class Pedidos {
    static get tableName() {
        return 'Pedidos';
    }

    constructor(data) {
        this.id = data.id;
        this.cliente_id = data.cliente_id;
        this.fecha = data.fecha;
        this.estado = data.estado;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            cliente_id: { type: sql.Int },
            fecha: { type: sql.DateTime },
            estado: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Pedidos;