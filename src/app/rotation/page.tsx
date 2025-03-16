import Loading from "../loading";
import { Suspense } from "react";
import RotationList from "@/app/rotation/RotationList";

const Rotation = () => {
  return (
    <div className="mx-[10%] mt-20">
      <h1 className="text-center text-4xl font-bold text-gold-heavy lg:text-6xl">
        이번주 로테이션
      </h1>
      <Suspense fallback={<Loading />}>
        <RotationList />
      </Suspense>
    </div>
  );
};

export default Rotation;
