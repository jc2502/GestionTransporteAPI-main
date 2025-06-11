const { sql, poolPromise } = require('../../../sqlserver');

class ViajesService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Viajes`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Viajes WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fecha_inicio', sql.DateTime, data.fecha_inicio)
            .input('fecha_fin', sql.DateTime, data.fecha_fin)
            .query(`
                INSERT INTO Viajes (fecha_inicio, fecha_fin)
                VALUES (@fecha_inicio, @fecha_fin)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fecha_inicio', sql.DateTime, data.fecha_inicio)
            .input('fecha_fin', sql.DateTime, data.fecha_fin)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Viajes
                SET fecha_inicio = @fecha_inicio, fecha_fin = @fecha_fin
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Viajes WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = ViajesService;