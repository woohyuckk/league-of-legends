"use client";

import { getLatestVersion } from "@/utils/serverApi";
import { useEffect, useState } from "react";

const Rotation = () => {
  const [version, setVersion] = useState<string | null>(null);
  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const latestVersion = await getLatestVersion();
        setVersion(latestVersion);
      } catch (error) {
        console.error("버전을 불러오는데 실패하였습니다.", error);
      }
    };
    fetchVersion();
  }, []);
  console.log(version);
  return <div>Rotation</div>;
};

export default Rotation;
