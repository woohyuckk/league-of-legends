import { ChampionDetail } from "@/types/champions";
import { ParamsProps } from "@/types/params";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";
import ChmapionDescription from "@/components/champions/ChmapionDescription";
import ChampionSkill from "@/components/champions/ChampionSkill";

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const [champion]: ChampionDetail[] = await fetchChampionDetail(params.id);
  return {
    title: `${champion.title}, ${champion.id}`,
    description: champion.blurb,
  };
}

const ChampionDetailPage = async ({ params }: ParamsProps) => {
  const [champion]: ChampionDetail[] = await fetchChampionDetail(params.id);
  return (
    <div className="my-20 flex flex-col items-center p-6 text-white">
      {/* 챔피언 메인 정보 */}
      <ChmapionDescription champion={champion} />
      {/* 스킬 섹션 */}
      <ChampionSkill champion={champion} />
    </div>
  );
};

export default ChampionDetailPage;
