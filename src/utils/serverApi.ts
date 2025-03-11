import { Champion } from "@/types/champions";

const BASE_URL = "https://ddragon.leagueoflegends.com/cdn";

export const fetchChampionList = async (): Promise<Champion[]> => {
  const res = await fetch(`${BASE_URL}/15.5.1/data/ko_KR/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data }: Record<string, Champion> = await res.json();
  return Object.values(data);
};
