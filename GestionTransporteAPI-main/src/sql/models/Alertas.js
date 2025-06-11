const { sql } = require('../../../sqlserver.js');

class Alertas {
    static get tableName() {
        return 'Alertas';
    }

    constructor(data) {
        this.AlertaID = data.AlertaID;
        this.TipoAlerta = data.TipoAlerta;
        this.Fecha = data.Fecha;
        this.Mensaje = data.Mensaje;
        this.SensorID = data.SensorID;
        this.RegistroCalidadID = data.RegistroCalidadID;
        this.IncidenteID = data.IncidenteID;
        this.AlertaID = data.AlertaID;
    }

    static get sqlSchema() {
        return {
            AlertaID: { type: sql.Int },
            TipoAlerta: { type: sql.NVarChar },
            Fecha: { type: sql.DateTime },
            Mensaje: { type: sql.Text },
            SensorID: { type: sql.Int },
            RegistroCalidadID: { type: sql.Int },
            IncidenteID: { type: sql.Int },
            AlertaID: { type: sql.VarChar }
        };
    }
}

module.exports = Alertas;