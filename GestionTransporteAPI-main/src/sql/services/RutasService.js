const { sql, poolPromise } = require('../../../sqlserver');

class RutasService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Rutas`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Rutas WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('origen', sql.NVarChar, data.origen)
            .input('destino', sql.NVarChar, data.destino)
            .query(`
                INSERT INTO Rutas (origen, destino)
                VALUES (@origen, @destino)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('origen', sql.NVarChar, data.origen)
            .input('destino', sql.NVarChar, data.destino)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Rutas
                SET origen = @origen, destino = @destino
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Rutas WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = RutasService;