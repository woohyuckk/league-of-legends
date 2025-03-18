"use client";

import { ThemeProvider } from "next-themes";
// import { useEffect, useState } from "react";

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(!isLoading);
  // }, []);
  // if (!isLoading) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
