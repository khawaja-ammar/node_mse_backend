import express from 'express';
import { Kysely } from 'kysely';

// Util
import { env } from './util/validateEnv';
import { logger, stream } from './util/logger';

// Config
import { db } from './database';
import { Database } from './database/models';
import { corsOptions } from './config/corsOptions';

// Middlewares
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { ErrorMiddleware } from './middlewares/error.middleware';

// Controllers
import * as controllerHotelv1 from './controllers/v1/hotel';
import * as controllerTest from './controllers/test';

export class App {
  public app: express.Application;
  public env: string;
  public port: number;
  public db: Kysely<Database>;

  constructor() {
    this.app = express();
    this.env = env.NODE_ENV;
    this.port = env.PORT;
    this.db = db;

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, '0.0.0.0', () => {
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
    // Case 1: We get a hotel_id and location and need to find all hotels in that vicinity
    this.app.get('/api/v1/hotel/0', controllerHotelv1.getSearchResultsUsingLocation);
    // this.app.get('/hello', controllerHello.getTest);
    // this.app.put('/hello', controllerHello.putTest);

    // this.app.get('/test/jsonsearchquery', controllerTest.getSearchResults);
    this.app.get('/test/jsonautosuggest', controllerTest.getAutoSuggestResults);
  }

  private initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
  }
}
