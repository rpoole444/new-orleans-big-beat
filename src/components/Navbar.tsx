"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import bandIcon from "../../public/Colorado Springs.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<nav className="bg-gray-900 text-white py-4 shadow-lg" style={{ background: "linear-gradient(90deg,rgb(103, 37, 123) , #1e293b)" }}>
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Header with Band Icon and Hamburger */}
        <div className="flex justify-between items-center">
          {/* Band Icon */}
          <div className="shadow-lg rounded flex-shrink-0">
            <Link href="/">
              <Image
                src={bandIcon}
                alt={`Big Beat Band Icon`}
                width={175}
                height={175}
                className="shadow-md rounded-lg border border-gray-300"
              />
            </Link>
          </div>
          <div className="hidden m-4 lg:block text-lg font-semibold font-serif text-gray-300">
            Feel the Rhythm of New Orleans
          </div>
          {/* Hamburger Menu Button */}
          <button
            className="text-white lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex lg:flex-row lg:space-x-4 bg-gray-800 lg:bg-transparent lg:items-center p-4 lg:p-0 rounded-lg lg:rounded-none shadow-md lg:shadow-none flex-col space-y-4 lg:space-y-0 mt-4 lg:mt-0`}
        >
          <Link
            href="/music"
            className="bg-gray-500 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md text-center"
          >
            Music
          </Link>
          <Link
            href="/band"
            className="bg-gray-500 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md text-center"
          >
            Band
          </Link>
          <Link
            href="/contact"
            className="bg-gray-500 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md text-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
