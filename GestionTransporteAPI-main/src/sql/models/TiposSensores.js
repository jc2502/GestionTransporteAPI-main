const { sql } = require('../../../sqlserver.js');

class TiposSensores {
    static get tableName() {
        return 'TiposSensores';
    }

    constructor(data) {
        this.id = data.id;
        this.tipo = data.tipo;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            tipo: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = TiposSensores;