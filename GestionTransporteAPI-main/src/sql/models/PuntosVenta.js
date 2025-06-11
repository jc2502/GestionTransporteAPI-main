const { sql } = require('../../../sqlserver.js');

class PuntosVenta {
    static get tableName() {
        return 'PuntosVenta';
    }

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.direccion = data.direccion;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            nombre: { type: sql.NVarChar },
            direccion: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = PuntosVenta;