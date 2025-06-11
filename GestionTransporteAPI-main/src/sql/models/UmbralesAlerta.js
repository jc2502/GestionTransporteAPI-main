const { sql } = require('../../../sqlserver.js');

class UmbralesAlerta {
    static get tableName() {
        return 'UmbralesAlerta';
    }

    constructor(data) {
        this.id = data.id;
        this.sensor_id = data.sensor_id;
        this.valor_min = data.valor_min;
        this.valor_max = data.valor_max;
        this.id = data.id;
    }

    static get sqlSchema() {
        return {
            id: { type: sql.Int },
            sensor_id: { type: sql.Int },
            valor_min: { type: sql.Decimal },
            valor_max: { type: sql.Decimal },
            id: { type: sql.VarChar }
        };
    }
}

module.exports = UmbralesAlerta;