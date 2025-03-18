import ItemCard from "@/components/items/ItemCard";
import Loading from "@/components/Loading";
import { Item } from "@/types/items";
import { fetchItemList } from "@/utils/serverApi";
import { Suspense } from "react";

/** 
 * @param item : [string, item] item의 0번째 index는 챔피언의 고유한 id를 반환합니다. ex)"1011" - 아이템 번호
 */

const Items = async () => {
  const items: [string, Item][] = await fetchItemList();

  return (
    <section className="px-10 py-20 text-white lg:px-20">
      <h1 className="px-10 text-4xl font-bold text-gold-heavy lg:text-center lg:text-6xl">
        아이템 목록
      </h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] items-center justify-start gap-4 p-8">
          {items.map((item) => {
            return <ItemCard key={item[0]} item={item} />;
          })}
        </div>
      </Suspense>
    </section>
  );
};

export default Items;
