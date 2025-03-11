/**
 * incremental Static Regeneration (ISR) 방식으로 구현하기
 * 재검증 시간 하루(86400초)로 설정할 것
 */

import ChampionCard from "@/components/champions/ChampionCard";
import { Champion } from "@/types/champions";
import { fetchChampionList } from "@/utils/serverApi";

const Champions = async () => {
  const championsArr: Champion[] = await fetchChampionList();
  return (
    <section className="px-10 py-20 lg:px-20 text-white">
      <h1 className="px-10 font-bold text-4xl lg:text-6xl lg:text-center text-gold-heavy  ">
        챔피언 목록
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 p-8 items-center justify-start">
        {championsArr.map((champion) => {
          return <ChampionCard key={champion.key} champion={champion} />;
        })}
      </div>
    </section>
  );
};

export default Champions;
