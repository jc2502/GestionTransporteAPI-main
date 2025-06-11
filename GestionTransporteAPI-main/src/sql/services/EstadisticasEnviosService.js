const { sql, poolPromise } = require('../../../sqlserver');

class EstadisticasEnviosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM EstadisticasEnvios`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM EstadisticasEnvios WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('promedio_temp', sql.Decimal, data.promedio_temp)
            .input('promedio_humedad', sql.Decimal, data.promedio_humedad)
            .query(`
                INSERT INTO EstadisticasEnvios (promedio_temp, promedio_humedad)
                VALUES (@promedio_temp, @promedio_humedad)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('promedio_temp', sql.Decimal, data.promedio_temp)
            .input('promedio_humedad', sql.Decimal, data.promedio_humedad)
            .input('id', sql.Int, id)
            .query(`
                UPDATE EstadisticasEnvios
                SET promedio_temp = @promedio_temp, promedio_humedad = @promedio_humedad
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM EstadisticasEnvios WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = EstadisticasEnviosService;