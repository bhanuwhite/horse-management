import pool from '../dbconfig/dbconnector';
import { updateHeartRate } from '../service/heartRateMonitor'

class HorseController {


    /**
  * get function to list all the horses
  * arguments req, res
  */
    public async get(req, res) {
        try {
            await updateHeartRate();
            const client = await pool.connect();
            const sql = "SELECT horse.id, horse.name, horse.date_of_birth, horse.gender, horse.pregnant, horse.due_date, horseRate.is_monitoring, horseRate.heart_rate from horses horse join horsesheartmonitor horseRate on horse.id = horseRate.horse_id";
            const { rows } = await client.query(sql);
            const result = rows;

            client.release();

            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /**
      * post function to create a new horse in DB
      * arguments req, res
      */
    public async post(req, res) {
        try {
            const { name, date_of_birth, gender, pregnant, due_date } = req.body;

            const client = await pool.connect();

            const sql = "INSERT INTO horses (name, date_of_birth, gender,pregnant, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING id";
            const result = await client.query(sql, [name, date_of_birth, gender, pregnant, due_date]);
            const heartSql = "INSERT INTO horsesheartmonitor (heart_rate, horse_id, is_monitoring) VALUES ($1, $2, $3)"

            await client.query(heartSql, [30, result.rows[0].id, false]);

            client.release();

            res.status(201).json({ success: true, msg: 'data inserted successfully.' });
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }


    /**
  * update function to update the record of one horse
  * arguments req, res, request param id
  */
    public async update(req, res) {
        try {

            const args = Object.values(req.body);
            const keys = Object.keys(req.body).join(',');
            const argKeys = Object.keys(req.body).map((obj, index) => {
                return "$" + (index + 1)
            }).join(',');

            const client = await pool.connect();
            const sql = "UPDATE horses SET (" + keys + ") = (" + argKeys + ") WHERE id =" + req.params.id;
            await client.query(sql, args);

            client.release();

            res.status(200).json({ success: true, msg: 'data updated successfully.' });
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /**
* delete function to delete the record of one horse
* arguments req, res, request param id
*/
    public async delete(req, res) {
        try {

            const client = await pool.connect();
            const sql = "DELETE FROM horses WHERE id =" + req.params.id;
            await client.query(sql);

            client.release();

            res.status(200).json({ success: true, msg: 'data delete successfully.' });
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /**
   * monitor function to update the monitoring status of horse
   * arguments req, res, request param id
   */
    public async monitor(req, res) {
        try {

            const client = await pool.connect();

            const sql = "UPDATE horsesheartmonitor SET is_monitoring=" + req.body.is_monitoring + " WHERE horse_id =" + req.params.id;
            await client.query(sql);

            client.release();

            res.status(200).json({ success: true, msg: 'monitoring status updated.' });
        } catch (error) {
            res.status(400).send(error);
        }
    }

}

export default HorseController;