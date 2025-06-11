const { sql, poolPromise } = require('../../../sqlserver');

class DetalleTrayectosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM DetalleTrayectos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM DetalleTrayectos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('ubicacion_actual', sql.NVarChar, data.ubicacion_actual)
            .input('hora', sql.DateTime, data.hora)
            .query(`
                INSERT INTO DetalleTrayectos (ubicacion_actual, hora)
                VALUES (@ubicacion_actual, @hora)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('ubicacion_actual', sql.NVarChar, data.ubicacion_actual)
            .input('hora', sql.DateTime, data.hora)
            .input('id', sql.Int, id)
            .query(`
                UPDATE DetalleTrayectos
                SET ubicacion_actual = @ubicacion_actual, hora = @hora
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM DetalleTrayectos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = DetalleTrayectosService;