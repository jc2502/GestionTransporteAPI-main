const { sql, poolPromise } = require('../../../sqlserver');

class ReportesService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Reportes`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Reportes WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('titulo', sql.NVarChar, data.titulo)
            .input('contenido', sql.Text, data.contenido)
            .input('fecha', sql.DateTime, data.fecha)
            .query(`
                INSERT INTO Reportes (titulo, contenido, fecha)
                VALUES (@titulo, @contenido, @fecha)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('titulo', sql.NVarChar, data.titulo)
            .input('contenido', sql.Text, data.contenido)
            .input('fecha', sql.DateTime, data.fecha)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Reportes
                SET titulo = @titulo, contenido = @contenido, fecha = @fecha
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Reportes WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = ReportesService;