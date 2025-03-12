import ItemCard from "@/components/items/ItemCard";
import { Item } from "@/types/items";
import { fetchItemList } from "@/utils/serverApi";

const Items = async () => {
  const items: [string, Item][] = await fetchItemList();

  return (
    <section className="px-10 py-20 lg:px-20 text-white">
      <h1 className="px-10 font-bold text-4xl lg:text-6xl lg:text-center text-gold-heavy  ">
        아이템 목록
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 p-8 items-center justify-start">
        {items.map((item) => {
          return <ItemCard key={item[0]} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Items;
