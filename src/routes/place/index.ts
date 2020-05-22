import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

const router = express.Router();

const whosePlace = (req: Request): number => {
  const userId = req.body.user.id;

  return 1;
};

router.post('/', (req: Request, res: Response) => {
  res.json({
    result: true,
  });
});

router.get('/:id', (req: Request, res: Response) => {
  console.log('success');
  res.json({
    result: true,
  });
});

router.put('/:id', (req: Request, res: Response) => {
  console.log('success');
  res.json({
    result: true,
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  console.log('success');
  res.json({
    result: true,
  });
});

module.exports = router;
