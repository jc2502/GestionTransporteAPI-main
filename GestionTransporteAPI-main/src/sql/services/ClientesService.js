const { sql, poolPromise } = require('../../../sqlserver');

class ClientesService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Clientes`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Clientes WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('direccion', sql.NVarChar, data.direccion)
            .input('email', sql.NVarChar, data.email)
            .query(`
                INSERT INTO Clientes (nombre, direccion, email)
                VALUES (@nombre, @direccion, @email)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('direccion', sql.NVarChar, data.direccion)
            .input('email', sql.NVarChar, data.email)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Clientes
                SET nombre = @nombre, direccion = @direccion, email = @email
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Clientes WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = ClientesService;