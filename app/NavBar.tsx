"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  // if (status === "loading") return null;

  return (
    <div className="flex gap-5 bg-slate-200 p-5">
      <Link href={"/"} className="">
        Next.js
      </Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/admin"}>Admin</Link>
      {status === "loading" && <div>Loading</div>}
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"}>sign in</Link>
      )}
      {status === "authenticated" && (
        <div>
          {session.user?.name}
          <Link href={"/api/auth/signout"} className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
