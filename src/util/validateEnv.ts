import 'dotenv/config';
import { cleanEnv, port, str } from 'envalid';

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production'] }),
  PORT: port(),
  LOG_DIR: str({ default: 'logs' }),
  LOG_FORMAT: str({ default: 'tiny' }),
});
