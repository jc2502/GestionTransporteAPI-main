const { sql, poolPromise } = require('../../../sqlserver');

class SensoresService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Sensores`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Sensores WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('ubicacion', sql.NVarChar, data.ubicacion)
            .query(`
                INSERT INTO Sensores (nombre, ubicacion)
                VALUES (@nombre, @ubicacion)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('ubicacion', sql.NVarChar, data.ubicacion)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Sensores
                SET nombre = @nombre, ubicacion = @ubicacion
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Sensores WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = SensoresService;