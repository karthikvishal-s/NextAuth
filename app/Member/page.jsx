import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from '../api/auth/[...nextauth]/options';
const Member = async() => {
  const session =await getServerSession(options);

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/Member");
  }
  return (
    <div>
      Member Server Session
      <p>
        {session?.user?.role}
      </p>
    </div>
  )
}

export default Member
