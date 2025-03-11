"use client"

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`fixed w-full h-20 font-bold z-50 border-b-4 border-double border-gold-light 
      ${darkMode ? "bg-[#111] text-white" : "bg-slate-400 text-[#111]"}`}
    >
      <nav className="flex items-center justify-between px-4 h-full">


        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-center">홈</Link>
          <Link href="/champions" className="text-center">챔피언 목록</Link>
          <Link href="/items" className="text-center" >아이템 목록</Link>
          <Link href="/rotation" className="text-center">챔피언 로테이션</Link>
        </div>

        <div className="flex items-center  w-full md:w-auto justify-between gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <BsSunFill className="text-white" />
            ) : (
              <BsMoonFill className="text-[#111]" />
            )}
          </button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`flex flex-col gap-4 px-4 py-4 md:hidden
          ${darkMode ? "bg-[#111] text-white" : "bg-slate-400 text-[#111]"}`}
        >
          <Link href="/" className="text-center" onClick={() => setIsOpen(false)}>
            홈
          </Link>
          <Link href="/champions"  className="text-center" onClick={() => setIsOpen(false)}>
            챔피언 목록
          </Link>
          <Link href="/items" className="text-center" onClick={() => setIsOpen(false)}>
            아이템 목록
          </Link>
          <Link href="/rotation" className="text-center" onClick={() => setIsOpen(false)}>
            챔피언 로테이션
          </Link>
        </div>
      )}
    </header>
  );
}
