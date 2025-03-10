/**
 * incremental Static Regeneration (ISR) 방식으로 구현하기
 * 재검증 시간 하루(86400초)로 설정할 것
 */

import { Champion, ChampionData } from "@/types/champions";

const BASE_URL = "https://ddragon.leagueoflegends.com/cdn";
const Champions = async () => {
  const res = await fetch(`${BASE_URL}/15.5.1/data/ko_KR/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data }: ChampionData = await res.json();
  const championsArr: Champion[] = Object.values(data);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4">
      {championsArr.map((champion) => {
        return (
          <div key={champion.key}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
            />
            <h1>{champion.id}</h1>
            <p>{champion.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Champions;
