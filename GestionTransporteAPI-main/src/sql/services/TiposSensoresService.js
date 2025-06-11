const { sql, poolPromise } = require('../../../sqlserver');

class TiposSensoresService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM TiposSensores`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM TiposSensores WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('tipo', sql.NVarChar, data.tipo)
            .query(`
                INSERT INTO TiposSensores (tipo)
                VALUES (@tipo)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('tipo', sql.NVarChar, data.tipo)
            .input('id', sql.Int, id)
            .query(`
                UPDATE TiposSensores
                SET tipo = @tipo
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM TiposSensores WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = TiposSensoresService;