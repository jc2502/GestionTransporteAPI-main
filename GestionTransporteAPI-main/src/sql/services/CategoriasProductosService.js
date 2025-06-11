const { sql, poolPromise } = require('../../../sqlserver');

class CategoriasProductosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM CategoriasProductos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM CategoriasProductos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .query(`
                INSERT INTO CategoriasProductos (nombre)
                VALUES (@nombre)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('id', sql.Int, id)
            .query(`
                UPDATE CategoriasProductos
                SET nombre = @nombre
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM CategoriasProductos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = CategoriasProductosService;