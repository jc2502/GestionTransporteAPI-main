const { sql } = require('../../../sqlserver.js');

class Clientes {
    static get tableName() {
        return 'Clientes';
    }

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.direccion = data.direccion;
        this.email = data.email;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            nombre: { type: sql.NVarChar },
            direccion: { type: sql.NVarChar },
            email: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Clientes;