const { sql, poolPromise } = require('../../../sqlserver');

class LecturasSensoresService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM LecturasSensores`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM LecturasSensores WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fecha', sql.DateTime, data.fecha)
            .input('valor', sql.Decimal, data.valor)
            .query(`
                INSERT INTO LecturasSensores (fecha, valor)
                VALUES (@fecha, @valor)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fecha', sql.DateTime, data.fecha)
            .input('valor', sql.Decimal, data.valor)
            .input('id', sql.Int, id)
            .query(`
                UPDATE LecturasSensores
                SET fecha = @fecha, valor = @valor
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM LecturasSensores WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = LecturasSensoresService;