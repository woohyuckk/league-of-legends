import { RIOT_URL } from "@/constants/api";
import { ChampionDetail } from "@/types/champions";
import { ParamsProps } from "@/types/params";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";



export async function generateMetadata({ params }: ParamsProps): Promise<Metadata> {
  const champion: ChampionDetail[] = await fetchChampionDetail(params.id);

  return {
    title: `${champion[0].title}, ${champion[0].id}`,
    description: champion[0].blurb,
  };
}

const ChampionDetailPage = async ({ params }: ParamsProps) => {
  const [champion]: ChampionDetail[] = await fetchChampionDetail(params.id);
  return (
    <div className="my-20 flex flex-col items-center p-6 text-white">
      {/* 챔피언 메인 정보 */}
      <div className="flex w-full max-w-4xl flex-col items-center gap-6 md:flex-row">
        <Image
          src={`${RIOT_URL.CHAMPION_SPLASH}/${champion.id}_0.jpg`}
          alt="champion illustration"
          width={500}
          height={300}
          className="rounded-lg border border-gray-500 object-cover"
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
      <div className="mt-8 flex w-full max-w-4xl flex-col items-center">
        <div className="flex w-full flex-wrap items-center justify-start gap-6">
          {/* 패시브 */}
          <div className="group relative flex flex-col items-center text-center">
            <Image
              src={`${RIOT_URL.CHAMPION_PASSIVE}/${champion.passive.image.full}`}
              alt="Champion Passive"
              width={80}
              height={80}
              className="rounded-lg border border-gray-500"
            />
            <span className="mt-2 font-semibold">{champion.passive.name}</span>
            <div className="absolute left-1/2 top-full z-10 mt-2 hidden w-64 -translate-x-1/2 rounded-lg bg-black p-2 text-sm text-white shadow-lg group-hover:flex">
              {champion.passive.description}
            </div>
          </div>

          {/* 일반 스킬들 */}
          <div className="relative flex flex-wrap justify-center gap-4">
            {champion.spells.map((spell) => (
              <div
                key={spell.id}
                className="group relative flex flex-col items-center"
              >
                <Image
                  src={`${RIOT_URL.CHAMPION_SPELLS}/${spell.id}.png`}
                  alt={spell.name}
                  width={80}
                  height={80}
                  className="rounded-lg border border-gray-500"
                />
                <span className="mt-2 font-semibold">{spell.name}</span>
                <div className="absolute left-1/2 top-full z-10 mt-2 hidden w-64 -translate-x-1/2 rounded-lg bg-black p-2 text-sm text-white shadow-lg group-hover:flex">
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
