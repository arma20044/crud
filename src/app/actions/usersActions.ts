'use server'

import { sql } from '@vercel/postgres';

import { revalidatePath } from 'next/cache';
import { NextResponse, NextRequest } from 'next/server'
import { writeFile } from "fs/promises";


interface Props {
    id?: number;
    email: string;
    password: string;
    avatarUrl: string;
    file: Blob;
}


export const crearUsers = async(datos:Props) => {
  

    console.log('crear users: ' + JSON.stringify(datos))

    const { email,password,avatarUrl,file } = datos

    console.log(JSON.stringify(datos))
    //return

   // const hashedPassword = await hash(password, 10);

   
    if (!avatarUrl) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

   
    


    const response = await sql`INSERT INTO USERS (email, password, avatar_url) VALUES (${email}, ${password}, ${file})`;

    

    revalidatePath('/dashboard/users')


    return response;


}


export const eliminarUsers = async(id:number) => {

  const response = await sql `DELETE FROM USERS WHERE ID = ${id}`;

  revalidatePath('/dashboard/users')


  return response.rows;

}