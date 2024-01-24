import { importImages } from "@/utils/importImages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-lg text-[#FFBB5C] bg-[#C63D2F] px-10 h-10">
      <Link href="/">
        <Image
          src={importImages("healthy-food.jpg")}
          alt="logo"
          width={60}
          className="rounded-md"
        />
      </Link>
      <Link href="/share" className="hover:opacity-65">Share a Food!</Link>
      <div className="flex items-center gap-4 text-lg justify-end">
        <Link className="hover:opacity-65" href="/">Home</Link>
        <Link className="hover:opacity-65" href="/about">About</Link>
        <Link className="hover:opacity-65" href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
