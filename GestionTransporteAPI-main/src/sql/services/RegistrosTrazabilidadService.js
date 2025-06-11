const { sql, poolPromise } = require('../../../sqlserver');

class RegistrosTrazabilidadService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM RegistrosTrazabilidad`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM RegistrosTrazabilidad WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('ubicacion', sql.NVarChar, data.ubicacion)
            .input('fecha', sql.DateTime, data.fecha)
            .query(`
                INSERT INTO RegistrosTrazabilidad (ubicacion, fecha)
                VALUES (@ubicacion, @fecha)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('ubicacion', sql.NVarChar, data.ubicacion)
            .input('fecha', sql.DateTime, data.fecha)
            .input('id', sql.Int, id)
            .query(`
                UPDATE RegistrosTrazabilidad
                SET ubicacion = @ubicacion, fecha = @fecha
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM RegistrosTrazabilidad WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = RegistrosTrazabilidadService;