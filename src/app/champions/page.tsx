import ChampionCard from "@/components/champions/ChampionCard";
import { Champion } from "@/types/champions";
import { fetchChampionList } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "../../components/Loading";

const Champions = async () => {
  const championsArr: Champion[] = await fetchChampionList();
  return (
    <section className="px-10 py-20 text-white lg:px-20">
      <h1 className="px-10 text-4xl font-bold text-gold-heavy lg:text-center lg:text-6xl">
        챔피언 목록
      </h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] items-center justify-start gap-4 p-8">
          {championsArr.map((champion) => {
            return <ChampionCard key={champion.key} champion={champion} />;
          })}
        </div>
      </Suspense>
    </section>
  );
};

export default Champions;
