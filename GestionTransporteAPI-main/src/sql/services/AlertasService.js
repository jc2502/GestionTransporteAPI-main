const { sql, poolPromise } = require('../../../sqlserver');

class AlertasService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT * FROM Alertas`);
        return result.recordset;
    }

    static async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM Alertas WHERE id = @id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('TipoAlerta', sql.NVarChar, data.TipoAlerta)
            .input('Fecha', sql.DateTime, data.Fecha)
            .input('Mensaje', sql.Text, data.Mensaje)
            .query(`
                INSERT INTO Alertas (TipoAlerta, Fecha, Mensaje)
                VALUES (@TipoAlerta, @Fecha, @Mensaje)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('TipoAlerta', sql.NVarChar, data.TipoAlerta)
            .input('Fecha', sql.DateTime, data.Fecha)
            .input('Mensaje', sql.Text, data.Mensaje)
            .input('id', sql.Int, id)
            .query(`
                UPDATE Alertas
                SET TipoAlerta = @TipoAlerta, Fecha = @Fecha, Mensaje = @Mensaje
                WHERE id = @id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Alertas WHERE id = @id`);
        return result.rowsAffected[0] > 0;
    }
}

module.exports = AlertasService;