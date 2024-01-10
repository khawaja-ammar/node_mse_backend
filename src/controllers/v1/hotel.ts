import express from 'express';
import { sql } from 'kysely';
import { db } from '../../database';
import { Hotel } from 'src/database/models';

export const getSearchResultsUsingLocation = async (req: express.Request, res: express.Response) => {
  const { q, lat, lng } = req.query;
  const max_dist = 10000;
  try {
    const result = await sql<Hotel[]>`SELECT * FROM MAIN_HOTEL_TABLE WHERE
    ST_DWITHIN (
      HOTEL_COORDINATES,
      ST_MAKEPOINT (${lat}, ${lng}),
      ${max_dist}
      ) LIMIT 10;`.execute(db);
    res.status(200).json({ properties: result.rows });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 'DB Failed to connect' });
  }
};
