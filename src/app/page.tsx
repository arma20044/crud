import Image from "next/image";
import { SessionProvider, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button";
import Logoutpage from "@/components/logoutpage";
import { Router } from "next/router";
import { redirect } from "next/navigation";






export default function Home() {


  //redirect('/login')

  return (
    
      <Logoutpage />
    
  );
}
