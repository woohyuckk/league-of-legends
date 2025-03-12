import { RIOT_URL } from "@/cosntants/api";
import { ChampionDetail } from "@/types/champions";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const champion: ChampionDetail[] = await fetchChampionDetail(params.id);

  return {
    title: `${champion[0].title}, ${champion[0].id}`,
    description: champion[0].blurb,
  };
}

const ChampionDetailPage = async ({ params }: Props) => {
  const [champion]: ChampionDetail[] = await fetchChampionDetail(params.id);
  return (
    <div className="flex flex-col items-center text-white p-6">
      {/* 챔피언 메인 정보 */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl items-center gap-6">
        <Image
          src={`${RIOT_URL.CHAMPION_SPLASH}/${champion.id}_0.jpg`}
          alt="champion illustration"
          width={500}
          height={300}
          className="object-cover rounded-lg border border-gray-500"
        />
        <div className="flex flex-col text-left text-white">
          <h1 className="text-4xl font-bold">{champion.name}</h1>
          <p className="text-xl font-semibold text-gray-300">
            {champion.title}
          </p>
          <p className="mt-2 text-sm text-white">{champion.blurb}</p>
        </div>
      </div>

      {/* 스킬 섹션 */}
      <div className="mt-8 w-full max-w-4xl flex flex-col items-center">
        <div className="flex  flex-wrap w-full justify-start gap-6 items-center">
          {/* 패시브 */}
          <div className="flex flex-col items-center text-center relative group">
            <Image
              src={`${RIOT_URL.CHAMPION_PASSIVE}/${champion.passive.image.full}`}
              alt="Champion Passive"
              width={80}
              height={80}
              className="rounded-lg border border-gray-500"
            />
            <span className="mt-2 font-semibold">{champion.passive.name}</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex w-64 p-2 bg-black text-white text-sm rounded-lg shadow-lg mt-2 z-10">
              {champion.passive.description}
            </div>
          </div>

          {/* 일반 스킬들 */}
          <div className="flex gap-4 relative flex-wrap justify-center">
            {champion.spells.map((spell) => (
              <div
                key={spell.id}
                className="group flex flex-col items-center relative"
              >
                <Image
                  src={`${RIOT_URL.CHAMPION_SPELLS}/${spell.id}.png`}
                  alt={spell.name}
                  width={80}
                  height={80}
                  className="rounded-lg border border-gray-500"
                />
                <span className="mt-2 font-semibold">{spell.name}</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex w-64 p-2 bg-black text-white text-sm rounded-lg shadow-lg mt-2 z-10">
                  {spell.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
