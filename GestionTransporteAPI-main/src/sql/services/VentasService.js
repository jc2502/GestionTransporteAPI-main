const { sql, poolPromise } = require('../../../sqlserver');

class VentasService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Ventas`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Ventas WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fecha', sql.DateTime, data.fecha)
            .input('total', sql.Decimal, data.total)
            .query(`
                INSERT INTO Ventas (fecha, total)
                VALUES (@fecha, @total)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fecha', sql.DateTime, data.fecha)
            .input('total', sql.Decimal, data.total)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Ventas
                SET fecha = @fecha, total = @total
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Ventas WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = VentasService;