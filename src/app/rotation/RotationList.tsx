"use client";

import ChampionCard from "@/components/champions/ChampionCard";
import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

/**
 * CSR 방식, Route Handler 사용
 * getChampionRotation:  prefetch를 사용하여 cache 활용 
 */

const RotationList = () => {
  const { data: rotationChampions } = useQuery({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] items-center justify-start gap-4 p-8 text-white">
      {rotationChampions?.map((champion) => (
        <ChampionCard champion={champion} key={champion.id} />
      ))}
    </div>
  );
};

export default RotationList;
