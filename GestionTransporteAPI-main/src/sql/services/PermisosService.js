const { sql, poolPromise } = require('../../../sqlserver');

class PermisosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Permisos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Permisos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .query(`
                INSERT INTO Permisos (nombre)
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
                UPDATE Permisos
                SET nombre = @nombre
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Permisos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = PermisosService;