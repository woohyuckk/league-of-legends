import { ChampionDetail } from "@/types/champions";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

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
  const champion: ChampionDetail[] = await fetchChampionDetail(params.id);
  return (
    <div>
      <h1>{champion[0].id}</h1>
      <p>{champion[0].name}</p>
      <p>{champion[0].title} </p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion[0].id}_0.jpg`}
        alt="champion illustation"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default ChampionDetailPage;
