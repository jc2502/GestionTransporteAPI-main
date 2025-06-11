const { sql, poolPromise } = require('../../../sqlserver');

class UmbralesAlertaService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM UmbralesAlerta`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM UmbralesAlerta WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('valor_min', sql.Decimal, data.valor_min)
            .input('valor_max', sql.Decimal, data.valor_max)
            .query(`
                INSERT INTO UmbralesAlerta (valor_min, valor_max)
                VALUES (@valor_min, @valor_max)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('valor_min', sql.Decimal, data.valor_min)
            .input('valor_max', sql.Decimal, data.valor_max)
            .input('id', sql.Int, id)
            .query(`
                UPDATE UmbralesAlerta
                SET valor_min = @valor_min, valor_max = @valor_max
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM UmbralesAlerta WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = UmbralesAlertaService;