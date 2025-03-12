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
    <div className="text-white">
      <h1>{champion.id}</h1>
      <p>{champion.name}</p>
      <p>{champion.title} </p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt="champion illustation"
        width={100}
        height={100}
        className="object-contain"
      />
      <Image
      src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/passive/${champion.passive.image.full}`}
      alt="Champion Passive"
      width={100}
      height={100}

      />
      <span className="block">{champion.passive.name}</span>
      <span>{champion.passive.description}</span>
      {champion.spells.map((spell) => {
        return (
          <React.Fragment key={spell.id}>
            <Image
              src={`${RIOT_URL.CHAMPION_SPELLS}/${spell.id}.png`}
              alt="Q skill"
              width={100}
              height={100}
            />
            <span className="block">{spell.name}</span>
            <span>{spell.description}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ChampionDetailPage;
