"use client";

import {useSession} from "next-auth/react";
import { redirect } from "next/navigation";

import React from 'react'

const MemberClient = async() => {

  const {data: session} = useSession({
    required: true,
    onUnauthenticated(){
      redirect("/api/auth/signin?callbackUrl=/")
    }
  });
  return (
    <div>
      MemberClient
      <p>
        {session?.user?.role}
      </p>
      <p>
        {session?.user?.name}
      </p>
    </div>
  )
}

export default MemberClient
