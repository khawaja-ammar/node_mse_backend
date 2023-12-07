import { env } from '../util/validateEnv';

export const dbConfig = Object.freeze({
  database: env.DB_NAME,
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  port: env.DB_PORT,
  max: env.DB_MAX_CONN,
});
