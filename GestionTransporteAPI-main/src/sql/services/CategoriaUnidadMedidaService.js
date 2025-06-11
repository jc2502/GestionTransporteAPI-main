const { sql, poolPromise } = require('../../../sqlserver');

class CategoriaUnidadMedidaService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM CategoriaUnidadMedida`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM CategoriaUnidadMedida WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .query(`
                INSERT INTO CategoriaUnidadMedida ()
                VALUES ()
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .input('id', sql.Int, id)
            .query(`
                UPDATE CategoriaUnidadMedida
                SET 
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM CategoriaUnidadMedida WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = CategoriaUnidadMedidaService;