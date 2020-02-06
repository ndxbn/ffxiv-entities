import {IEquipment} from "./Equipment";

export interface ICharacter {
  level: number

  // todo
  // attribute: Readonly<IAttributes>;
  // /** alias to attribute*/
  // parameter: Readonly<IAttributes>;
}

class CharacterLevel {
  public level: number;

  constructor(level: number = 0) {
    this.level = level;
  }

  public add(incremental: number = 1): void {
    this.level += incremental;
  }
}

export class Character implements ICharacter {
  protected levelRaw: CharacterLevel;

  get level(): number {
    return this.levelRaw.level;
  };

  constructor(level: number = 0) {
    this.levelRaw = new CharacterLevel(level);
  }

  public levelUp(incremental: number = 1): void {
    this.levelRaw.add(incremental);
  }

  public ware(equipment: IEquipment): void {
    //
    // todo
  }
}
