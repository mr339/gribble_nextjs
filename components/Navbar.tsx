import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <>
      <nav className="flexBetween navbar">
        <div className="flex-1 gap-10 flexStart">
          <Link href={"/"}>
            <Image src="./logo.svg" height={43} width={115} alt="Logo" />
          </Link>
          <ul className="xl:flex hidden gap-7 text-small">
            {NavLinks.map((link: any) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flexCenter gap-4">
          {session ? (
            <>
              UserPhoto
              <Link href="/create-project">Share your work</Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
