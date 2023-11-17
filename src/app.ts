import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';

import { env } from './util/validateEnv';
import { logger, stream } from './util/logger';
import { corsOptions } from './config/corsOptions';

// All controllers
import * as controllerHello from './controllers/hello';
import * as controllerTest from './controllers/test';

export class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = env.NODE_ENV;
    this.port = env.PORT;

    this.initializeMiddlewares();
    this.initializeRoutes();
    // this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} ========`);
      logger.info(`App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(morgan(env.LOG_FORMAT, { stream }));
    this.app.use(cors(corsOptions));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());

    this.app.use(express.json());
  }

  private initializeRoutes() {
    this.app.get('/hello', controllerHello.getTest);
    this.app.put('/hello', controllerHello.putTest);

    this.app.get('/test/jsonsearchquery', controllerTest.getTest);
  }
}
