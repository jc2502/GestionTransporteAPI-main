const { sql, poolPromise } = require('../../../sqlserver');

class ViajesPedidosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM ViajesPedidos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM ViajesPedidos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .query(`
                INSERT INTO ViajesPedidos ()
                VALUES ()
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            
            .input('id', sql.Int, id)
            .query(`
                UPDATE ViajesPedidos
                SET 
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ViajesPedidos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = ViajesPedidosService;