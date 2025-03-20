"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-bl fixed z-50 h-20 w-full border-b-4 border-double border-gold-light bg-slate-400 font-bold dark:bg-black dark:text-white">
      <nav className="flex h-full items-center justify-between px-4">
        <div className="hidden gap-8 md:flex">
          <Link href="/" className="text-center">
            홈
          </Link>
          <Link href="/champions" className="text-center">
            챔피언 목록
          </Link>
          <Link href="/items" className="text-center">
            아이템 목록
          </Link>
          <Link href="/rotation" className="text-center">
            챔피언 로테이션
          </Link>
        </div>

        <div className="flex w-full items-center justify-between gap-4 md:w-auto">
          <button aria-label="dark mode toggle" onClick={toggleTheme}>
            <BsSunFill
              aria-label="light-mode"
              className="hidden text-white dark:block"
            />
            <BsMoonFill
              aria-label="dark-mode"
              className="block text-black dark:hidden"
            />
          </button>

          <button
            aria-label="menu-btn"
            className="md:hidden"
            onClick={openMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`flex flex-col gap-4 px-4 py-4 md:hidden bg-slate-400 font-bold dark:bg-black dark:text-white `}
        >
          <Link href="/" className="text-center" onClick={openMenu}>
            홈
          </Link>
          <Link href="/champions" className="text-center" onClick={openMenu}>
            챔피언 목록
          </Link>
          <Link href="/items" className="text-center" onClick={openMenu}>
            아이템 목록
          </Link>
          <Link href="/rotation" className="text-center" onClick={openMenu}>
            챔피언 로테이션
          </Link>
        </div>
      )}
    </header>
  );
}
