import { catModel, CatType } from '../models';
import { BaseCtrl } from './base';

export default class CatCtrl extends BaseCtrl<CatType> {
  model = catModel;
}
