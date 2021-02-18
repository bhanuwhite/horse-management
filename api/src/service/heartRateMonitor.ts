import pool from '../dbconfig/dbconnector';


/**
 * updating the heart rate every time get api hits
 * update heart rate service
 */
export const updateHeartRate = async () => {
    try {

        const client = await pool.connect();

        const sql = "SELECT id from horsesheartmonitor where is_monitoring=" + true;

        const { rows } = await client.query(sql);
        for (let i = 0; i < rows.length; i++) {
            let sql = '';
            sql += 'UPDATE horsesheartmonitor SET heart_rate=' + Math.floor(Math.random() * (60 - 20 + 1) + 20) + '  WHERE id=' + rows[i].id
            await client.query(sql);
        }

        client.release();

        return 'ok';
    } catch (error) {
        return 'ok';
    }
}



