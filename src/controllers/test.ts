import express from 'express';

export const getAutoSuggestResults = (req: express.Request, res: express.Response) => {
  const { q } = req.query;
  const max = parseInt(req.query.max as string);

  const arr = [];
  for (let i = 0; i < max; i++) {
    arr.push({ id: i + 1, name: `${q}+str+${i + 1}` });
  }
  res.status(200).json(arr);
};
