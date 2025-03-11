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
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4">
      {championsArr.map((champion) => {
        return (
          <div key={champion.key} className="border-2">
            <Link href={`/champions/${champion.id}`}>
              <Image
                priority
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                alt="Profile of Champion"
                width={150}
                height={150}
                className="w-full object-cover"
              />
              <h1>{champion.id}</h1>
              <p>{champion.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Champions;
