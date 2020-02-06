import {IItem} from "./Item";
import {IAttributes} from "./Attributes";

export interface IEquipment extends IItem {
  /** 装備レベル */
  requireLevel: number;

  attribute: IAttributes;
}
