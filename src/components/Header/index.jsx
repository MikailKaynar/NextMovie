import Link from "next/link";
import React from "react";
import { FaChessQueen } from "react-icons/fa6";
const Header = () => {
  return (
    <header className="lg:px-40">
      <div>
        <Link href={"/"} className="flex items-center justify-center gap-5 text-2xl">
          <FaChessQueen size={30} /> ARKEEMOVIE
        </Link>
        <nav>
          <Link href={"/"} className="navLink">
            Ana Sayfa
          </Link>
          <Link href={"/"} className="navLink">
            Filmler
          </Link>
          <Link href={"/"} className="navLink">
            Diziler
          </Link>
          <Link href={"/"} className="navLink">
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
