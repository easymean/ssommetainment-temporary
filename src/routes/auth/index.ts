import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

const router = express.Router();

// const loginRequired = (req,res,next) =>{
//   if(로그인 ㄴㄴ){
//     res.redirect('로그인 창으로')
//   }else{
//     next();
//   }
// }

//auth controllers

router.post(`/login`, (req: Request, res: Response) => {
  const user = req.body;
  const email = user.email;
  const password = user.password;

  res.json({
    result: true,
  });
});

router.get('/logout', (req: Request, res: Response) => {
  console.log('success');
  res.json({
    result: true,
  });
});

module.exports = router;
