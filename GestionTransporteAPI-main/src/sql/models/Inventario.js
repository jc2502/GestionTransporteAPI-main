const { sql } = require('../../../sqlserver.js');

class Inventario {
    static get tableName() {
        return 'Inventario';
    }

    constructor(data) {
        this.id = data.id;
        this.almacen_id = data.almacen_id;
        this.producto_id = data.producto_id;
        this.cantidad = data.cantidad;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            almacen_id: { type: sql.Int },
            producto_id: { type: sql.Int },
            cantidad: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Inventario;