"use server";

import { RIOT_URL } from "@/constants/api";
import { Champion, ChampionDetail } from "@/types/champions";
import { Item } from "@/types/items";

export const getLatestVersion = async () => {
  const res = await fetch(`${RIOT_URL.VERSION_API}`);
  const data = await res.json();
  return data[0];
};

export const fetchChampionList = async (): Promise<Champion[]> => {
  const version = await getLatestVersion();
  const res = await fetch(`${RIOT_URL.CHAMPIONS_API(version)}/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  if (!res.ok) {
    throw new Error("챔피언 목록을 불러오는데 실패하였습니다.");
  }
  const { data }: { data: Record<string, Champion> } = await res.json();
  return Object.values(data);
};

export const fetchChampionDetail = async (
  id: string,
): Promise<ChampionDetail[]> => {
  const version = await getLatestVersion();
  const res = await fetch(
    `${RIOT_URL.CHAMPIONS_API(version)}/champion/${id}.json`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("챔피언 상세정보를 불러오는데 실패하였습니다.");
  }
  const { data }: { data: Record<string, ChampionDetail> } = await res.json();
  return Object.values(data);
};

export const fetchItemList = async (
  id: string = "",
): Promise<[string, Item][]> => {
  const version = await getLatestVersion();
  const res = await fetch(`${RIOT_URL.CHAMPIONS_API(version)}/item.json`, {
    cache: id ? "no-store" : "force-cache",
  });

  if (!res.ok) {
    throw new Error("아이템 목록을 불러오는데 실패하였습니다.");
  }
  const { data }: { data: Record<string, Item> } = await res.json();
  return Object.entries(data);
};

export const getRotationList = async () => {
  const rotationRes = await fetch(`${RIOT_URL.ROTATION_CHAMPIONS}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "https://developer.riotgames.com",
      "X-Riot-Token": `${process.env.RIOT_API_KEY}`,
    },
  });

  if (!rotationRes.ok) {
    throw new Error("Rotation Champion List를 불러오는데에 실패하였습니다.");
  }

  let rotationData = await rotationRes.json();
  const chmapionListData = await fetchChampionList();

  rotationData = rotationData.freeChampionIds;

  const rotationChampions = rotationData.map((championId: number) =>
    chmapionListData.find((champion) => Number(champion.key) === championId),
  );

  return rotationChampions;
};
