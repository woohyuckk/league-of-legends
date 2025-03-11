// 챔피언 전체 데이터
export interface ChampionData {
  [key: string]: Champion;
}
// Record<string, Champion>와 같음

// 챔피언 추출 데이터
export interface Champion {
  version: Version;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: Tag[];
  partype: string;
  stats: { [key: string]: number };
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

export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export enum Tag {
  Assassin = "Assassin",
  Fighter = "Fighter",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
  Tank = "Tank",
}

export enum Version {
  The1551 = "15.5.1",
}

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  blurb: string;
  spells: ChampionSpells[];
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
}

export interface ChampionSpells {
  id: string;
  name: string;
  description: string;
}
