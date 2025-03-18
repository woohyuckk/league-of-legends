import { RIOT_URL } from "@/constants/api";
import {  ChampionDetail } from "@/types/champions";
import Image from "next/image";

type ChampionDescriptionProps = {
  id: string;
  name: string;
  title: string;
  blurb: string;
};

const ChmapionDescription = ({ champion }: { champion: ChampionDetail }) => {
  const { id, name, title, blurb }: ChampionDescriptionProps = champion;
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-6 md:flex-row">
      <Image
        src={`${RIOT_URL.CHAMPION_SPLASH}/${id}_0.jpg`}
        alt="champion illustration"
        width={500}
        height={300}
        className="rounded-lg border border-gray-500 object-cover"
      />
      <div className="flex flex-col text-left text-white">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-xl font-semibold text-gray-300">{title}</p>
        <p className="mt-2 text-sm text-white">{blurb}</p>
      </div>
    </div>
  );
};

export default ChmapionDescription;
