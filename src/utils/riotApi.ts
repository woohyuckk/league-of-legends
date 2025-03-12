import { Champion } from "@/types/champions";

export const getChampionRotation = async (): Promise<Champion[]> => {
  const res = await fetch("/api/rotation");
  const data = await res.json();

  return data;
};
