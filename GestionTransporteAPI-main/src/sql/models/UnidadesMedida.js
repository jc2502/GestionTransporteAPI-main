const { sql } = require('../../../sqlserver.js');

class UnidadesMedida {
    static get tableName() {
        return 'UnidadesMedida';
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

module.exports = UnidadesMedida;