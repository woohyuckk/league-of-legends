import { Item } from "@/types/items";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const Items = async () => {
  const items: [string, Item][] = await fetchItemList();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 p-8 text-white">
      {items.map((item) => {
        return (
          <div key={item[0]} className="border-2">
            <Link href={`/items/${item[0]}`}>
              <Image
                priority
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item[0]}.png`}
                alt="item illustation"
                width={150}
                height={150}
                className="w-full object-cover"
              />
              <div> {item[1].name}</div>
              <div> {item[1].plaintext}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
