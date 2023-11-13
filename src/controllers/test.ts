import express from 'express';

export const getTest = (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'Success' });
};

export const putTest = (req: express.Request, res: express.Response) => {
  if (req.body.msg === 'hello') {
    res.status(200).json({ status: 'Success' });
  } else {
    res.status(400).json({ status: 'Failure' });
  }
};
