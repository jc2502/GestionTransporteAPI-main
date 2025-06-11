const { sql } = require('../../../sqlserver.js');

class Roles {
    static get tableName() {
        return 'Roles';
    }

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            nombre: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Roles;