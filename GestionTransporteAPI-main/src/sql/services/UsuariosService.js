const { sql, poolPromise } = require('../../../sqlserver');

class UsuariosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Usuarios`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Usuarios WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('email', sql.NVarChar, data.email)
            .input('password', sql.NVarChar, data.password)
            .query(`
                INSERT INTO Usuarios (nombre, email, password)
                VALUES (@nombre, @email, @password)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('email', sql.NVarChar, data.email)
            .input('password', sql.NVarChar, data.password)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Usuarios
                SET nombre = @nombre, email = @email, password = @password
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Usuarios WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = UsuariosService;