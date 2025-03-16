import Loading from "../loading";
import { Suspense } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getRotationList } from "@/utils/serverApi";
import RotationList from "./RotationList";

/**
 * 기존에 만들어 놓았던 getChampionRotation(route handler)함수를 재활용하려고 했으나, 서버에서 호출하면 error가 발생
 * getRotationList라는 server action 함수를 따로 분리하여 호출하였습니다.
 */

const Rotation = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["rotation"],
    queryFn: getRotationList,
  });
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
