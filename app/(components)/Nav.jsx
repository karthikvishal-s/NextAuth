"use client";

import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Nav() {
  const { data: session, status } = useSession();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>

          {status === "authenticated" ? (
            <button onClick={() => redirect("/logoutsecurity")}>
              Logout
            </button>
          ) : (
            <button onClick={() => signIn()}>Login</button>
          )}
        </div>
      </nav>
    </header>
  );
}
