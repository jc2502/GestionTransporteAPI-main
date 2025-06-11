const { sql } = require('../../../sqlserver.js');

class CategoriaUnidadMedida {
    static get tableName() {
        return 'CategoriaUnidadMedida';
    }

    constructor(data) {
        this.id = data.id;
        this.categoria_id = data.categoria_id;
        this.unidad_medida_id = data.unidad_medida_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            categoria_id: { type: sql.Int },
            unidad_medida_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = CategoriaUnidadMedida;