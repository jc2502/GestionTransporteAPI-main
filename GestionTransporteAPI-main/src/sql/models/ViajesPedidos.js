const { sql } = require('../../../sqlserver.js');

class ViajesPedidos {
    static get tableName() {
        return 'ViajesPedidos';
    }

    constructor(data) {
        this.ViajeID = data.ViajeID;
        this.PedidoID = data.PedidoID;
        this.ViajeID = data.ViajeID;
        this.PedidoID = data.PedidoID;
    }

    static get sqlSchema() {
        return {
            ViajeID: { type: sql.Int },
            PedidoID: { type: sql.Int },
            ViajeID: { type: sql.VarChar },
            PedidoID: { type: sql.VarChar }
        };
    }
}

module.exports = ViajesPedidos;