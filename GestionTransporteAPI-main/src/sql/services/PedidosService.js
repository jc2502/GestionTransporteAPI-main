const { sql, poolPromise } = require('../../../sqlserver');

class PedidosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Pedidos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Pedidos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fecha', sql.DateTime, data.fecha)
            .input('estado', sql.NVarChar, data.estado)
            .query(`
                INSERT INTO Pedidos (fecha, estado)
                VALUES (@fecha, @estado)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fecha', sql.DateTime, data.fecha)
            .input('estado', sql.NVarChar, data.estado)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Pedidos
                SET fecha = @fecha, estado = @estado
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Pedidos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = PedidosService;