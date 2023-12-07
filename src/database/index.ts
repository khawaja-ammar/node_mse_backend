import { Database } from './models';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

import { dbConfig } from '../config/dbConfig';

const dialect = new PostgresDialect({
  pool: new Pool(dbConfig),
});

export const db = new Kysely<Database>({
  dialect,
});
