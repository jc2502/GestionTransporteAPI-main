const { sql, poolPromise } = require('../../../sqlserver');

class DetallePedidosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM DetallePedidos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM DetallePedidos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('cantidad', sql.Decimal, data.cantidad)
            .query(`
                INSERT INTO DetallePedidos (cantidad)
                VALUES (@cantidad)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('cantidad', sql.Decimal, data.cantidad)
            .input('id', sql.Int, id)
            .query(`
                UPDATE DetallePedidos
                SET cantidad = @cantidad
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM DetallePedidos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = DetallePedidosService;