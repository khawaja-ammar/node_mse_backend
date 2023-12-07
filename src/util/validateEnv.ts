import 'dotenv/config';
import { cleanEnv, port, str, num } from 'envalid';

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production'] }),
  PORT: port(),
  LOG_DIR: str({ default: 'logs' }),
  LOG_FORMAT: str({ default: 'tiny' }),
  DB_NAME: str(),
  DB_HOST: str(),
  DB_USER: str(),
  DB_PASS: str(),
  DB_PORT: port(),
  DB_MAX_CONN: num(),
});
