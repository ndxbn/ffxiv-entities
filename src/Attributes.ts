export type IAttributes = {
  // battle parameters
  attributes: {
    // physical
    strength: number;
    dexterity: number;
    vitality: number;
    // magical
    intelligence: number;
    mind: number;
    // pie: number;
  };
  offense: {
    criticalHitRate: number;
    determination: number;
    directHitRate: number;
  }
  defensive: {
    defense: number;
    magicDefense: number;
  }
  physical: {
    attackPower: number;
    skillSpeed: number;
  }
  mental: {
    attackMagicPotency: number;
    healingMagicPotency: number;
    spellSpeed: number;
  };
  role: {
    tenacity: number;
    piety: number;
  }

  // ギャザクラ
  // todo
}
