const { sql, poolPromise } = require('../../../sqlserver');

class LotesProductosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM LotesProductos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM LotesProductos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('codigo_lote', sql.NVarChar, data.codigo_lote)
            .input('fecha_produccion', sql.Date, data.fecha_produccion)
            .input('fecha_vencimiento', sql.Date, data.fecha_vencimiento)
            .query(`
                INSERT INTO LotesProductos (codigo_lote, fecha_produccion, fecha_vencimiento)
                VALUES (@codigo_lote, @fecha_produccion, @fecha_vencimiento)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('codigo_lote', sql.NVarChar, data.codigo_lote)
            .input('fecha_produccion', sql.Date, data.fecha_produccion)
            .input('fecha_vencimiento', sql.Date, data.fecha_vencimiento)
            .input('id', sql.Int, id)
            .query(`
                UPDATE LotesProductos
                SET codigo_lote = @codigo_lote, fecha_produccion = @fecha_produccion, fecha_vencimiento = @fecha_vencimiento
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM LotesProductos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = LotesProductosService;