'use client';

import { crearUser } from "@/app/helpers/users";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { GridRowModesModel, GridRowSelectionModel } from '@mui/x-data-grid';


export const NewUser = ({rowSelectionModel}) => { 


  console.log('esto llego:' + JSON.stringify(rowSelectionModel[0]))


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  



  

  const router = useRouter()

  // const onSubmit = async( e: FormEvent) => {
  //   e.preventDefault();
  //   console.log({email}, {password})

  //   if(email.trim().length === 0 || password.trim().length === 0){
  //     return
  //   }


  //   crearUser({
  //     email,
  //     password
  //   })

  //   router.refresh()
  // }


  const onSubmit = async (e: FormEvent) => {
    

    

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Process response here
      console.log("Registration Successful", response);
      toast({ title: "Registration Successful" });
    } catch (error: any) {
      console.error("Registration Failed:", error);
      toast({ title: "Registration Failed", description: error.message });
    }
  };


  const deleteCompleted = async() => {

    console.log('borrar', typeof(rowSelectionModel))
    console.log(rowSelectionModel[0] != undefined)
    console.log(rowSelectionModel[0])

    // if (rowSelectionModel.includes('{}')){
    //   console.log('seleccione un elemento')
    // }

    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( rowSelectionModel[0] ),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Process response here
      console.log("Registration Successful", response);
      toast({ title: "Registration Successful" });
      router.refresh()
    } catch (error: any) {
      console.error("Registration Failed:", error);
      toast({ title: "Registration Failed", description: error.message });
    }

    

  }

  

  return (
    <form onSubmit={onSubmit}  className='flex w-full pl-10'>
      
      <br></br>
      <div></div>
      <input type="text" value={email}
      onChange={(e) => setEmail(e.target.value)}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="crear email" />

      <input type="text" value={password}
      onChange={(e) => setPassword(e.target.value)}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="crear password" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

     {rowSelectionModel[0] != undefined && <button 
        onClick={ () => deleteCompleted() }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Delete
      </button>}


    </form>
  )
}