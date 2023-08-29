import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="flexBetween navbar">
        <div className="flex-1 gap-10 flexStart">
          <Link href={"/"}>
            <Image src="./logo.svg" height={43} width={115} alt="Logo" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
