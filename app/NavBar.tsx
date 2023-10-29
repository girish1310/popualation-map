import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex gap-5 bg-slate-200 p-5">
      <Link href={"/"} className="">
        Next.js
      </Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/admin"}>Admin</Link>
    </div>
  );
};

export default NavBar;
