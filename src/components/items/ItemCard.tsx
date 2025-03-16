import { RIOT_URL } from "@/constants/api";
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
          src={`${RIOT_URL.ITEM_IMAGE}/${item[0]}.png`}
          alt="item illustation"
          width={150}
          height={150}
          className="w-full object-cover"
        />
        <span className="block bg-black text-center font-bold">
          {item[1].name}
        </span>

        <span className="flex items-center justify-center bg-black text-center font-bold">
          <FaCoins className="mr-2 text-gold-heavy" />
          <span className="text-center text-xl"> {gold.total}</span>
        </span>
      </Link>
    </div>
  );
};

export default ItemCard;
