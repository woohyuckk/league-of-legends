export interface ItemsData {
  [key: string]: Item;
}

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into?: string[];
  image: Image;
  gold: Gold;
  tags: Tag[];
  maps: { [key: string]: boolean };
  stats: { [key: string]: number };
  from?: string[];
  depth?: number;
  inStore?: boolean;
  effect?: string;
  consumed?: boolean;
  stacks?: number;
  hideFromAll?: boolean;
  consumeOnFull?: boolean;
  specialRecipe?: number;
  requiredChampion?: string;
}

export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Gold {
  base: number;
  total: number;
  sell: number;
  purchasable: boolean;
}

export enum Tag {
  AbilityHaste = "AbilityHaste",
  Active = "Active",
  Armor = "Armor",
  ArmorPenetration = "ArmorPenetration",
  AttackSpeed = "AttackSpeed",
  Aura = "Aura",
  Boots = "Boots",
  Consumable = "Consumable",
  CooldownReduction = "CooldownReduction",
  CriticalStrike = "CriticalStrike",
  Damage = "Damage",
  GoldPer = "GoldPer",
  Health = "Health",
  HealthRegen = "HealthRegen",
  Jungle = "Jungle",
  Lane = "Lane",
  LifeSteal = "LifeSteal",
  MagicPenetration = "MagicPenetration",
  MagicResist = "MagicResist",
  Mana = "Mana",
  ManaRegen = "ManaRegen",
  NonbootsMovement = "NonbootsMovement",
  OnHit = "OnHit",
  Slow = "Slow",
  SpellBlock = "SpellBlock",
  SpellDamage = "SpellDamage",
  SpellVamp = "SpellVamp",
  Stealth = "Stealth",
  Tenacity = "Tenacity",
  Trinket = "Trinket",
  Vision = "Vision",
}
