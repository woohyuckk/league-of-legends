import { Item } from "@/types/items";
import { fetchItemList } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const items: [string, Item][] = await fetchItemList();
  const item = items.find((item) => {
    return item[0] === params.id;
  });

  return {
    title: item[1].name,
    description: item[1].plaintext,
  };
}

const ItemDetail = () => {
  return <div>ItemDetail</div>;
};

export default ItemDetail;
