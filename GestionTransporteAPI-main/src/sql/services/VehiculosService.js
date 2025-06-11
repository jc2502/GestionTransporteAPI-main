const { sql, poolPromise } = require('../../../sqlserver');

class VehiculosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Vehiculos`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Vehiculos WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('placa', sql.NVarChar, data.placa)
            .input('descripcion', sql.NVarChar, data.descripcion)
            .query(`
                INSERT INTO Vehiculos (placa, descripcion)
                VALUES (@placa, @descripcion)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('placa', sql.NVarChar, data.placa)
            .input('descripcion', sql.NVarChar, data.descripcion)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Vehiculos
                SET placa = @placa, descripcion = @descripcion
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Vehiculos WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = VehiculosService;