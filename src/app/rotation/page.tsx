import Loading from "../loading";
import { Suspense } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getRotationList } from "@/utils/serverApi";
import RotationList from "./RotationList";

const Rotation = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["rotation"],
    queryFn: () => getRotationList(),
  });
  console.log("rotation page")

  return (
    <div className="mx-[10%] mt-20">
      <h1 className="text-center text-4xl font-bold text-gold-heavy lg:text-6xl">
        이번주 로테이션
      </h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<Loading />}>
          <RotationList />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Rotation;
