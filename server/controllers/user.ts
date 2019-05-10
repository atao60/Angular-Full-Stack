import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { env } from 'process';

import { userSchema, UserType } from '../models';
import { BaseCtrl } from './base';

export default class UserCtrl extends BaseCtrl<UserType> {
  model = userSchema;

  login = (req: Request, res: Response) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { 
        return res.sendStatus(403); 
      }

      user.comparePassword(req.body.password, (error: Error, isMatch: boolean) => {
        if (!isMatch) { 
          return res.sendStatus(403); 
        }

        const token = sign({ user }, env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token });
      });
    });
  }

}
