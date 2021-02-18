import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import horseRouter from './routers/HorseRouter';
import pool from './dbconfig/dbconnector';


   /**
  * Creation of express server
  */
class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

       /**
  * config for middlewares
  */

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
        this.app.use(cors());
    }

       /**
  * database connectivity function
  */

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) throw new Error(err);
            console.log('Connected');
          }); 
    }

       /**
  * routing base path
  */
    private routerConfig() {
        this.app.use('/horses', horseRouter);
    }

       /**
  * starting the express server
  */

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;