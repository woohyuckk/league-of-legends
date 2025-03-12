export const RIOT_URL = {
  VERSION_API: "https://ddragon.leagueoflegends.com/api/versions.json",
  CHAMPIONS_API: (version: string) =>
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR`,
  ROTATION_CHAMPIONS:
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
  CHAMPION_SPELLS: "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell",
  CHAMPION_SPLASH:
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash",
  CHAMPION_PASSIVE:
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/passive",
};
