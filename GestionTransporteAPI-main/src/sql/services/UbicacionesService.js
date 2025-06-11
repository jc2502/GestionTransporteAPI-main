const { sql, poolPromise } = require('../../../sqlserver');

class UbicacionesService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Ubicaciones`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Ubicaciones WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('codigo', sql.NVarChar, data.codigo)
            .input('descripcion', sql.NVarChar, data.descripcion)
            .query(`
                INSERT INTO Ubicaciones (codigo, descripcion)
                VALUES (@codigo, @descripcion)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('codigo', sql.NVarChar, data.codigo)
            .input('descripcion', sql.NVarChar, data.descripcion)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Ubicaciones
                SET codigo = @codigo, descripcion = @descripcion
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Ubicaciones WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = UbicacionesService;