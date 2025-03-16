import { RIOT_URL } from "@/constants/api";
import { fetchChampionList } from "@/utils/serverApi";

export async function GET() {
  const rotationRes = await fetch(`${RIOT_URL.ROTATION_CHAMPIONS}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "https://developer.riotgames.com",
      "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    },
  });

  if (!rotationRes.ok) {
    return Response.json({ error: "로테이션 데이터 fetching error" });
  }

  let rotationData = await rotationRes.json();
  const chmapionListData = await fetchChampionList();

  rotationData = rotationData.freeChampionIds;

  const rotationChampions = rotationData.map((championId: number) =>
    chmapionListData.find((champion) => Number(champion.key) === championId),
  );

  return Response.json(rotationChampions);
}
