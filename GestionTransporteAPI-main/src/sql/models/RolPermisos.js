const { sql } = require('../../../sqlserver.js');

class RolPermisos {
    static get tableName() {
        return 'RolPermisos';
    }

    constructor(data) {
        this.rol_id = data.rol_id;
        this.permiso_id = data.permiso_id;
        this.rol_id = data.rol_id;
        this.permiso_id = data.permiso_id;
    }

    static get sqlSchema() {
        return {
            rol_id: { type: sql.Int },
            permiso_id: { type: sql.Int },
            rol_id: { type: sql.VarChar },
            permiso_id: { type: sql.VarChar }
        };
    }
}

module.exports = RolPermisos;