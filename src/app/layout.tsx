import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Providers from "./providers";
import ThemeProviders from "@/components/providers/ThemeProvider";
import { ThemeProvider } from "next-themes";

const BeaufortforLoL = localFont({
  src: [
    {
      path: "../style/fonts/BeaufortforLOL-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../style/fonts/BeaufortforLOL-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../style/fonts/BeaufortforLOL-Light.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-beaufort-sans",
});

export const metadata: Metadata = {
  title: "League of Legends",
  description: "Sparta Next-js Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"ko"} suppressHydrationWarning>
      <body className={`${BeaufortforLoL.variable} antialiased`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Header />
            <Main>{children}</Main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
