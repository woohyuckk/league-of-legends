"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`fixed z-50 h-20 w-full border-b-4 border-double border-gold-light font-bold ${darkMode ? "bg-[#111] text-white" : "bg-slate-400 text-[#111]"}`}
    >
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
          <button
            aria-label="dark mode toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <BsSunFill aria-label="light-mode" className="text-white" />
            ) : (
              <BsMoonFill aria-label="dark-mode" className="text-[#111]" />
            )}
          </button>

          <button
            aria-label="menu-btn"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`flex flex-col gap-4 px-4 py-4 md:hidden ${darkMode ? "bg-[#111] text-white" : "bg-slate-400 text-[#111]"}`}
        >
          <Link
            href="/"
            className="text-center"
            onClick={() => setIsOpen(false)}
          >
            홈
          </Link>
          <Link
            href="/champions"
            className="text-center"
            onClick={() => setIsOpen(false)}
          >
            챔피언 목록
          </Link>
          <Link
            href="/items"
            className="text-center"
            onClick={() => setIsOpen(false)}
          >
            아이템 목록
          </Link>
          <Link
            href="/rotation"
            className="text-center"
            onClick={() => setIsOpen(false)}
          >
            챔피언 로테이션
          </Link>
        </div>
      )}
    </header>
  );
}
