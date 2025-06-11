const { sql, poolPromise } = require('../../../sqlserver');

class MovimientosInventarioService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM MovimientosInventario`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM MovimientosInventario WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('cantidad', sql.Decimal, data.cantidad)
            .input('fecha', sql.DateTime, data.fecha)
            .query(`
                INSERT INTO MovimientosInventario (cantidad, fecha)
                VALUES (@cantidad, @fecha)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('cantidad', sql.Decimal, data.cantidad)
            .input('fecha', sql.DateTime, data.fecha)
            .input('id', sql.Int, id)
            .query(`
                UPDATE MovimientosInventario
                SET cantidad = @cantidad, fecha = @fecha
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM MovimientosInventario WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = MovimientosInventarioService;