import express from 'express';
import { db } from '../database';

export const getTest = async (req: express.Request, res: express.Response) => {
  try {
    const val = await db.selectFrom('hotel_finder_table').select('hotel_name').limit(10).execute();
    res.status(200).json({ status: val });
  } catch (err) {
    res.status(200).json({ status: 'FAILED' });
  }
};

export const putTest = (req: express.Request, res: express.Response) => {
  if (req.body.msg === 'hello') {
    res.status(200).json({ status: 'Success' });
  } else {
    res.status(400).json({ status: 'Failure' });
  }
};
