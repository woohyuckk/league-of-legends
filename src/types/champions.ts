// 챔피언 전체 데이터
export interface ChampionData {
  [key: string]: Champion;
}
// Record<string, Champion>와 같음

// 챔피언 추출 데이터
export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
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
