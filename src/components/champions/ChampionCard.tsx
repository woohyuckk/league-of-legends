import { Champion } from "@/types/champions";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: Champion;
};

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <div key={champion.key} className="border-2 border-gold-light rounded-sm">
      <Link href={`/champions/${champion.id}`}>
        <Image
          priority
          src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={150}
          height={150}
          className="w-full object-cover"
        />
        <h1 className="text-center font-bold bg-black">{champion.name}</h1>
      </Link>
    </div>
  );
};

export default ChampionCard;
