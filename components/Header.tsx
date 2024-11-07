import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/academeo_cropped.jpg";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="p-5 flex items-center justify-between animate-slide bg-background h-25 border-b sticky top-0 z-20">
      <Link href={"/home"} className="flex items-end leading-none">
        <Image
          src={logo}
          alt="Platform"
          height={50}
          width={50}
          className="rounded-full"
        />
        <p className="font-semibold text-[1.7rem]">Academeo</p>
      </Link>
      <div className="flex gap-2">
        <nav className="font-semibold text-[1rem] hidden lg:flex items-center gap-5">
          <ul className="hidden md:flex space-x-4">
            <Link href="/home" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/courses" className="hover:text-gray-200">
              Courses
            </Link>
            <Link href="/tutors" className="hover:text-gray-200">
              Tutors
            </Link>
            <Link href="/sessions" className="hover:text-gray-200">
              My Sessions
            </Link>
            <Link href="/profile" className="hover:text-gray-200">
              Profile
            </Link>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
