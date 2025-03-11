import { Item } from "@/types/items";
import { fetchItemList } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const items: [string, Item][] = await fetchItemList(params.id);
  const item = items.find((item) => {
    return item[0] === params.id;
  });

  return {
    title: item ? item[1].name : "",
    description: item ? item[1].plaintext : "",
  };
}

const ItemDetail = async ({ params }: Props) => {
  const items: [string, Item][] = await fetchItemList();
  const item = items.find((item) => {
    return item[0] === params.id;
  });
  console.log(item);
  return (
    <div>
      {item && (
        <>
          <Image
            priority
            src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item[0]}.png`}
            alt="item illustation"
            width={150}
            height={150}
          />
          <h1>{item[1].name}</h1>
          <p>{item[1].plaintext}</p>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
