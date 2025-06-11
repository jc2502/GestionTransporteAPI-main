const { sql } = require('../../../sqlserver.js');

class Reportes {
    static get tableName() {
        return 'Reportes';
    }

    constructor(data) {
        this.id = data.id;
        this.titulo = data.titulo;
        this.contenido = data.contenido;
        this.fecha = data.fecha;
        this.usuario_id = data.usuario_id;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            titulo: { type: sql.NVarChar },
            contenido: { type: sql.Text },
            fecha: { type: sql.DateTime },
            usuario_id: { type: sql.Int },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = Reportes;