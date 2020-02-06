export enum Rarity {
  Common,
  Pink,
  Green,
  Blue,
  Purple
}

export interface IItem {
  id: number;

  name: string;
  description: string;

  itemLevel: number;
  Rarity: Rarity;
}
