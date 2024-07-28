import { SessionProvider, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button";
import Logoutpage from "@/components/logoutpage";
import { Router } from "next/router";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";






export default async function Home() {


  const session = await getServerSession();

  if(session){
    redirect('/dashboard')
  }
  //redirect('/login')

  return (
    
      <Logoutpage />
    
  );
}
