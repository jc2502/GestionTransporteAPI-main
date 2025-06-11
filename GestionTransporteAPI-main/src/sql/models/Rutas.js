const { sql } = require('../../../sqlserver.js');

class Rutas {
    static get tableName() {
        return 'Rutas';
    }

    constructor(data) {
        this.id = data.id;
        this.origen = data.origen;
        this.destino = data.destino;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            origen: { type: sql.NVarChar },
            destino: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Rutas;