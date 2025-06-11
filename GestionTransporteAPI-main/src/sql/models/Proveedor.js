const { sql } = require('../../../sqlserver.js');

class Proveedor {
    static get tableName() {
        return 'Proveedor';
    }

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.direccion = data.direccion;
        this.telefono = data.telefono;
        this.email = data.email;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            nombre: { type: sql.NVarChar },
            direccion: { type: sql.NVarChar },
            telefono: { type: sql.NVarChar },
            email: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Proveedor;