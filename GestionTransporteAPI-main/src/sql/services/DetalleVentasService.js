const { sql, poolPromise } = require('../../../sqlserver');

class DetalleVentasService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM DetalleVentas`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM DetalleVentas WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('cantidad', sql.Decimal, data.cantidad)
            .input('precio_unitario', sql.Decimal, data.precio_unitario)
            .query(`
                INSERT INTO DetalleVentas (cantidad, precio_unitario)
                VALUES (@cantidad, @precio_unitario)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('cantidad', sql.Decimal, data.cantidad)
            .input('precio_unitario', sql.Decimal, data.precio_unitario)
            .input('id', sql.Int, id)
            .query(`
                UPDATE DetalleVentas
                SET cantidad = @cantidad, precio_unitario = @precio_unitario
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM DetalleVentas WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = DetalleVentasService;