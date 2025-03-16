"use client";

import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading";
import ChampionCard from "@/components/champions/ChampionCard";

const RotationList = () => {
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
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] items-center justify-start gap-4 p-8 text-white">
      {rotationChampions?.map((champion) => (
        <ChampionCard champion={champion} key={champion.id} />
      ))}
    </div>
  );
};

export default RotationList;
