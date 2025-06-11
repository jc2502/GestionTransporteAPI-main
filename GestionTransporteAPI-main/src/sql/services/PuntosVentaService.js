const { sql, poolPromise } = require('../../../sqlserver');

class PuntosVentaService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM PuntosVenta`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM PuntosVenta WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('direccion', sql.NVarChar, data.direccion)
            .query(`
                INSERT INTO PuntosVenta (nombre, direccion)
                VALUES (@nombre, @direccion)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('direccion', sql.NVarChar, data.direccion)
            .input('id', sql.Int, id)
            .query(`
                UPDATE PuntosVenta
                SET nombre = @nombre, direccion = @direccion
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM PuntosVenta WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = PuntosVentaService;