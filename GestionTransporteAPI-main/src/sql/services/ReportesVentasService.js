const { sql, poolPromise } = require('../../../sqlserver');

class ReportesVentasService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM ReportesVentas`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM ReportesVentas WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .query(`
                INSERT INTO ReportesVentas ()
                VALUES ()
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .input('id', sql.Int, id)
            .query(`
                UPDATE ReportesVentas
                SET 
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ReportesVentas WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = ReportesVentasService;