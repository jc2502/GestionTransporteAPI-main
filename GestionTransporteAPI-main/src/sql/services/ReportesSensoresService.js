const { sql, poolPromise } = require('../../../sqlserver');

class ReportesSensoresService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM ReportesSensores`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM ReportesSensores WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .query(`
                INSERT INTO ReportesSensores ()
                VALUES ()
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .input('id', sql.Int, id)
            .query(`
                UPDATE ReportesSensores
                SET 
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ReportesSensores WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = ReportesSensoresService;