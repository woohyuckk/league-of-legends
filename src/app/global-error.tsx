"use client";

import ErrorCustom, { ErrorProps } from "@/components/ErrorCustom";

const GlobalError = ({ error, reset }: ErrorProps) => {
  return <ErrorCustom error={error} reset={reset} />;
};

export default GlobalError;
