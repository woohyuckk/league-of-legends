import { Champion, ChampionDetail } from "@/types/champions";
import { Item } from "@/types/items";

const BASE_URL = "https://ddragon.leagueoflegends.com/cdn";

export const getLatestVersion = async () => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/api/versions.json`
  );
  const data = await res.json();
  return data[0];
};

export const fetchChampionList = async (): Promise<Champion[]> => {
  const version = await getLatestVersion();
  const res = await fetch(`${BASE_URL}/${version}/data/ko_KR/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data }: { data: Record<string, Champion> } = await res.json();
  return Object.values(data);
};

export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail[]> => {
  const version = await getLatestVersion();
  const res = await fetch(
    `${BASE_URL}/${version}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const { data }: { data: Record<string, ChampionDetail> } = await res.json();
  return Object.values(data);
};

export const fetchItemList = async (
  id: string = ""
): Promise<[string, Item][]> => {
  const version = await getLatestVersion();
  const res = await fetch(`${BASE_URL}/${version}/data/ko_KR/item.json`, {
    cache: id ? "no-store" : "force-cache",
  });
  const { data }: { data: Record<string, Item> } = await res.json();
  return Object.entries(data);
};
