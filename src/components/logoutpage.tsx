'use client'


import { redirect } from "next/navigation"
import { Button } from "./ui/button"
import { SessionProvider, useSession,signIn,signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




export default function Logoutpage() {

 
  const { data: session,status } = useSession()

  if(status==='loading'){
    return(
      <span>ESPERE...</span>
    )
  }

  // if(status==='unauthenticated'){
  //   redirect('/login')
  // }

  if(status==='authenticated'){
    return(
      <>
      <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
       {/* <button onClick={() => signOut()}></button> */}
       <span>{`logeado como: ${session.user?.email} `}</span>
        <br></br>
      <Button onClick={() => signOut()}>salir</Button>
      {/* <span>salir</span> */}
      </>
    )
  }

  if (session) {
    return (
      <main>
        Signed in as {session!.user!.email} <br />

        {/* <button onClick={() => signOut()}>Sign out</button> */}

        {status}
      </main>
    )
  }
  return (
    

    <main>
      {/* {JSON.stringify(session)} */}
      No ha iniciado sesion <br />
      <Button onClick={() => signIn()}>Acceder</Button>
      {/* <button onClick={() => console.log('asds')}>Sign in</button> */}

    </main>
    
  )


}

