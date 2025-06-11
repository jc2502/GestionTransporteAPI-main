const { sql } = require('../../../sqlserver.js');

class Usuarios {
    static get tableName() {
        return 'Usuarios';
    }

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.email = data.email;
        this.password = data.password;
        this.rol_id = data.rol_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            nombre: { type: sql.NVarChar },
            email: { type: sql.NVarChar },
            password: { type: sql.NVarChar },
            rol_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Usuarios;