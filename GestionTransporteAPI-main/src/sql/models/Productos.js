const { sql } = require('../../../sqlserver.js');

class Productos {
    static get tableName() {
        return 'Productos';
    }

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.categoria_unidad_id = data.categoria_unidad_id;
        this.proveedor_id = data.proveedor_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            nombre: { type: sql.NVarChar },
            categoria_unidad_id: { type: sql.Int },
            proveedor_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Productos;