"use client";

import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading";
import ChampionCard from "@/components/champions/ChampionCard";
import { Suspense } from "react";

const Rotation = () => {
  const {
    data: rotationChampions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rotationChampions"],
    queryFn: getChampionRotation,
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error...</div>;

  console.log(rotationChampions);
  return (
    <div className="mx-[10%] mt-20">
      <h1 className="text-center text-4xl font-bold text-gold-heavy lg:text-6xl">
        이번주 로테이션
      </h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] items-center justify-start gap-4 p-8 text-white">
          {rotationChampions?.map((champion) => (
            <ChampionCard champion={champion} key={champion.id} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Rotation;
