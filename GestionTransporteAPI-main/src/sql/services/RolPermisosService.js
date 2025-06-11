const { sql, poolPromise } = require('../../../sqlserver');

class RolPermisosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM RolPermisos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM RolPermisos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .query(`
                INSERT INTO RolPermisos ()
                VALUES ()
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .input('id', sql.Int, id)
            .query(`
                UPDATE RolPermisos
                SET 
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM RolPermisos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = RolPermisosService;