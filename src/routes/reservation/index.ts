import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

const router = express.Router();

// const rentOrOwnPlace = (req: Request): number => {

//   const user = req.body.user;
//   const userId = user.id;

// }

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
