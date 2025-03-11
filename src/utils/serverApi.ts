import { Champion, ChampionDetail } from "@/types/champions";
import { Item } from "@/types/items";

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

export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail[]> => {
  const res = await fetch(`${BASE_URL}/15.5.1/data/ko_KR/champion/${id}.json`, {
    cache: "no-store",
  });
  const { data }: Record<string, ChampionDetail> = await res.json();
  return Object.values(data);
};

export const fetchItemList = async (id: string =""): Promise<[string, Item][]> => {
  const res = await fetch(`${BASE_URL}/15.5.1/data/ko_KR/item.json`, {
    cache: id ? "no-store" : "force-cache",
  });
  const { data }: Record<string, Item> = await res.json();
  return Object.entries(data);
};
