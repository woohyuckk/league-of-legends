"use client";

import ChampionCard from "@/components/champions/ChampionCard";
import ErrorCustom from "@/components/ErrorCustom";
import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

/**
 * isLoading은 suspense로 fetch 발생하는 promise를 catch하여 Loading을 처리해주고 있기 때문에 불필요하다고 생각하여 제거하였습니다.
 * error또한 error.tsx에서 처리해주지만 혹시 error.tsx에서 발생하는 에러를 캐치하지
 * getChampionRotation: Route handler를 이용한 호출방식입니다.
 */

const RotationList = () => {
  const { data: rotationChampions, error } = useQuery({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  if (error) return <ErrorCustom error={error} />;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] items-center justify-start gap-4 p-8 text-white">
      {rotationChampions?.map((champion) => (
        <ChampionCard champion={champion} key={champion.id} />
      ))}
    </div>
  );
};

export default RotationList;
