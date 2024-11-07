"use client";

// components/Navbar.js
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Academeo
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-200">
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
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-3xl">&#9776;</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col p-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/courses" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Link href="/tutors" onClick={() => setIsOpen(false)}>
            Tutors
          </Link>
          <Link href="/sessions" onClick={() => setIsOpen(false)}>
            My Sessions
          </Link>
          <Link href="/profile" onClick={() => setIsOpen(false)}>
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}
