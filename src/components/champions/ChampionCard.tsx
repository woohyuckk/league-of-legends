import { RIOT_URL } from "@/cosntants/api";
import { Champion } from "@/types/champions";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: Pick<Champion,  "key"|"id"|"image"|"name" >;
};

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <div key={champion.key} className="rounded-sm border-2 border-gold-light">
      <Link href={`/champions/${champion.id}`}>
        <Image
          priority
          src={`${RIOT_URL.CHAMPION_IMAGE}/${champion.image.full}`}
          alt={champion.name}
          width={150}
          height={150}
          className="w-full object-cover"
        />
        <h1 className="bg-black text-center font-bold">{champion.name}</h1>
      </Link>
    </div>
  );
};

export default ChampionCard;
