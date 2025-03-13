"use client";
import ErrorCustom from "@/components/ErrorCustom";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <ErrorCustom error={error} reset={reset} />;
}
