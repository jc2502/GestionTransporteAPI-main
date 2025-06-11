const { sql, poolPromise } = require('../../../sqlserver');

class RegistrosCalidadService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM RegistrosCalidad`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM RegistrosCalidad WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('descripcion', sql.NVarChar, data.descripcion)
            .input('fecha', sql.DateTime, data.fecha)
            .query(`
                INSERT INTO RegistrosCalidad (descripcion, fecha)
                VALUES (@descripcion, @fecha)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('descripcion', sql.NVarChar, data.descripcion)
            .input('fecha', sql.DateTime, data.fecha)
            .input('id', sql.Int, id)
            .query(`
                UPDATE RegistrosCalidad
                SET descripcion = @descripcion, fecha = @fecha
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM RegistrosCalidad WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = RegistrosCalidadService;