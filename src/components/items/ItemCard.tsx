import { Gold, Item } from "@/types/items";
import Image from "next/image";
import Link from "next/link";
import { FaCoins } from "react-icons/fa";

// tuple 타입 정의
interface ItemCardProps {
  item: [string, Item];
}

const ItemCard = ({ item }: ItemCardProps) => {
  const gold: Gold = item[1].gold;

  return (
    <div key={item[0]} className="rounded-sm border-2 border-gold-light">
      <Link href={`/items/${item[0]}`}>
        <Image
          priority
          src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item[0]}.png`}
          alt="item illustation"
          width={150}
          height={150}
          className="w-full object-cover"
        />
        <span className="block bg-black text-center font-bold">
          {item[1].name}
        </span>

        <span className="flex justify-center bg-black text-center font-bold">
          <FaCoins className="text-gold-heavy" /> {gold.total}
        </span>
      </Link>
    </div>
  );
};

export default ItemCard;
