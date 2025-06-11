const { sql } = require('../../../sqlserver.js');

class Ubicaciones {
    static get tableName() {
        return 'Ubicaciones';
    }

    constructor(data) {
        this.id = data.id;
        this.almacen_id = data.almacen_id;
        this.codigo = data.codigo;
        this.descripcion = data.descripcion;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            almacen_id: { type: sql.Int },
            codigo: { type: sql.NVarChar },
            descripcion: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Ubicaciones;