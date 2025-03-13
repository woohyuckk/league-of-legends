"use client";
import ErrorCustom from "@/components/ErrorCustom";

// ✅Error component 는 꼭 클라이언트 컴포넌트여야한다는 점 !!

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <ErrorCustom error={error} reset={reset} />;
}
