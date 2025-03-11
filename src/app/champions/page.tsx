/**
 * incremental Static Regeneration (ISR) 방식으로 구현하기
 * 재검증 시간 하루(86400초)로 설정할 것
 */

import { Champion } from "@/types/champions";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const Champions = async () => {
  const championsArr: Champion[] = await fetchChampionList();
  return (
    <section className="px-10 py-20 lg:px-20 text-white">
      <h1 className="px-10 font-bold text-4xl lg:text-6xl lg:text-center text-gold-heavy  ">
        챔피언 목록
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 p-8 items-center justify-start">
        {championsArr.map((champion) => {
          return (
            <div key={champion.key} className="border-2 border-gold-light rounded-sm">
              <Link href={`/champions/${champion.id}`}>
                <Image
                  priority
                  src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                  alt={champion.name}
                  width={150}
                  height={150}
                  className="w-full object-cover"
                />
                <h1 className="text-center font-bold bg-black">{champion.name}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Champions;
