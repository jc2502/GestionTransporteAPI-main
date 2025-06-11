const { sql } = require('../../../sqlserver.js');

class Vehiculos {
    static get tableName() {
        return 'Vehiculos';
    }

    constructor(data) {
        this.id = data.id;
        this.placa = data.placa;
        this.descripcion = data.descripcion;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            placa: { type: sql.NVarChar },
            descripcion: { type: sql.NVarChar },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Vehiculos;