const { sql } = require('../../../sqlserver.js');

class LotesProductos {
    static get tableName() {
        return 'LotesProductos';
    }

    constructor(data) {
        this.id = data.id;
        this.producto_id = data.producto_id;
        this.codigo_lote = data.codigo_lote;
        this.fecha_produccion = data.fecha_produccion;
        this.fecha_vencimiento = data.fecha_vencimiento;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            producto_id: { type: sql.Int },
            codigo_lote: { type: sql.NVarChar },
            fecha_produccion: { type: sql.Date },
            fecha_vencimiento: { type: sql.Date },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = LotesProductos;