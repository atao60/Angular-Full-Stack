import { Document, model, Schema } from 'mongoose';

import { Cat } from '../../shared/models';

// export interface CatInput extends Cat { };

export type CatType = /*CatInput*/ Cat & Document;

const catSchema = new Schema<CatType>({
  name: String,
  weight: Number,
  age: Number
});

export default model<CatType>('Cat', catSchema);
