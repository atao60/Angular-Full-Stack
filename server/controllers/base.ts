import { Request, Response } from 'express';
import { Document, Model } from 'mongoose';

export abstract class BaseCtrl<T extends Document> {

  abstract model: Model<T>;  // i.e. Model<T, QueryHelpers = {}>

  // Get all
  getAll = async (req: Request, res: Response) => {
    try {
      const docs = await this.model.find({});
      res.status(200).json(docs);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Count all
  count = async (req: Request, res: Response) => {
    try {
      const selector: any = undefined; // TODO: try retrieve selector from request
      const count = await this.model.countDocuments(selector);
      res.status(200).json(count);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Insert
  insert = async (req: Request, res: Response) => {
    try {
      const obj = await new this.model(req.body).save();
      res.status(201).json(obj);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Get by id
  get = async (req: Request, res: Response) => {
    try {
      const obj = await this.model.findOne({ _id: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Update by id
  update = async (req: Request, res: Response) => {
    try {
      await this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Delete by id
  delete = async (req: Request, res: Response) => {
    try {
      await this.model.findOneAndRemove({ _id: req.params.id });
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
