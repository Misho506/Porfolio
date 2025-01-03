'use client';

import Link from "next/link"; // For internal Links
import "./navbar.scss";

const NavBar = () => {
  return (
    <nav className="h-20 flex items-center justify-between p-2 navbar-container">
      <h1 className="text-2xl">Mauricio LR</h1>
      <ul className="flex flex-1 justify-end">
        <li className="ml-4 p-2 m-3 text">
          <Link href="/pages/projects">Projects</Link>
        </li>
        <li className="ml-4 p-2 m-3 text">
          <Link href="/pages/social">Social</Link>
        </li>
        <li className="ml-4 p-2 m-3 text">
          <Link href="/">Home</Link>
        </li>
        <button className="button-custom p-2 m-3 rounded-lg ml-4 text-black">
          Resume
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
