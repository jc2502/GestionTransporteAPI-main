const { sql, poolPromise } = require('../../../sqlserver');

class ProveedorService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Proveedor`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Proveedor WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('direccion', sql.NVarChar, data.direccion)
            .input('telefono', sql.NVarChar, data.telefono)
            .input('email', sql.NVarChar, data.email)
            .query(`
                INSERT INTO Proveedor (nombre, direccion, telefono, email)
                VALUES (@nombre, @direccion, @telefono, @email)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.NVarChar, data.nombre)
            .input('direccion', sql.NVarChar, data.direccion)
            .input('telefono', sql.NVarChar, data.telefono)
            .input('email', sql.NVarChar, data.email)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Proveedor
                SET nombre = @nombre, direccion = @direccion, telefono = @telefono, email = @email
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Proveedor WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = ProveedorService;