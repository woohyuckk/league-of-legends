import { Item } from "@/types/items";
import { ParamsProps } from "@/types/params";
import { removeTag } from "@/utils/removeTag";
import { fetchItemList } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaCoins } from "react-icons/fa";

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const items: [string, Item][] = await fetchItemList(params.id);
  const item = items.find((item) => {
    return item[0] === params.id;
  });

  return {
    title: item ? item[1].name : "",
    description: item ? item[1].plaintext : "",
  };
}

const ItemDetail = async ({ params }: ParamsProps) => {
  const items: [string, Item][] = await fetchItemList(params.id);

  const item = items.find((item) => {
    return item[0] === params.id;
  });

  console.log(item ? item[1] : "");
  return (
    <div className="mx-auto my-56 w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
      {item && (
        <div>
          <div className="relative aspect-[16/9] w-full">
            <Image
              priority
              src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item[0]}.png`}
              alt="item illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="mb-2 text-xl font-bold text-white md:text-2xl">
              {removeTag(item[1].name)}
            </h1>
            <p className="mb-2 font-bold text-red-500">
              {removeTag(item[1].plaintext)}
            </p>
            <p className="mb-4 font-bold text-white">
              {removeTag(item[1].description)}
            </p>
            <div className="flex items-center justify-center rounded bg-black px-4 py-2 font-bold text-white">
              <FaCoins className="mr-2 text-gold-heavy" />
              <span>구매: {item[1].gold.total}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
