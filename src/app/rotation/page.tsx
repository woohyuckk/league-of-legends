"use client";

import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

const Rotation = () => {

  const {
    data: rotationChampions,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["rotationChampions"],
    queryFn: getChampionRotation
  })
  
  if(isLoading) return (<div>loading...</div>)
  if (isError) return (<div>Error...</div>)
  
  console.log(rotationChampions)
  return <div>Rotation</div>;
};

export default Rotation;
