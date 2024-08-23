'use client'


import { redirect } from "next/navigation"
import { Button } from "./ui/button"
import { SessionProvider, useSession,signIn,signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCookie, getCookies } from "cookies-next"
import Image from "next/image"





export default function Logoutpage() {


  

  const user = getCookie('currentAvatar')

 
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
       <Image alt="esto" width={300} height={300} src={`/artworks-000119416310-3lsyax-t500x500.jpeg`}/>
      <Avatar>
                <AvatarImage 
                src="https://github.com/shadcn.png" 
               // src={`./abc.jpeg`}
                />
               
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
       {/* <button onClick={() => signOut()}></button> */}
       <span>{`logeado como: ${session.user?.email} `}</span>
       <span>{JSON.stringify(user)}</span>
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

