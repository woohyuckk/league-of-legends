import { RIOT_URL } from "@/constants/api";
import { Gold, Item } from "@/types/items";
import { removeTag } from "@/utils/removeTag";
import Image from "next/image";
import Link from "next/link";
import { FaCoins } from "react-icons/fa";

/**
 *  @param Item : [id, item] ex) id: ITEM 번호 "1001", item : 아이템 상세 정보
 */
interface ItemCardProps {
  item: [string, Item];
}

const ItemCard = ({ item }: ItemCardProps) => {
  const gold: Gold = item[1].gold;

  return (
    <div key={item[0]} className="rounded-sm border-2 border-gold-light">
      <Link href={`/items/${item[0]}`}>
        <Image
          src={`${RIOT_URL.ITEM_IMAGE}/${item[0]}.png`}
          alt="item illustation"
          width={150}
          height={150}
          className="w-full object-cover"
        />
        <span className="block truncate whitespace-pre-wrap bg-black text-center font-bold">
          {removeTag(item[1].name)}
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
