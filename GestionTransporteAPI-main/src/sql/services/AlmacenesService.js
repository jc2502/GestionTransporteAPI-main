const { sql, poolPromise } = require('../../../sqlserver');

class AlmacenesService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Almacenes`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Almacenes WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('direccion', sql.NVarChar, data.direccion)
            .query(`
                INSERT INTO Almacenes (nombre, direccion)
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
                UPDATE Almacenes
                SET nombre = @nombre, direccion = @direccion
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Almacenes WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = AlmacenesService;