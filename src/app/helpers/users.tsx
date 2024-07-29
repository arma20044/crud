'use server'
import { QueryResult, sql } from "@vercel/postgres";
import { hash } from "bcrypt";

interface Props {
    email: string;
    password: string;
}


export const crearUser = async({email, password}:Props):Promise<QueryResult> => {
  
    
    
        
        // YOU MAY WANT TO ADD SOME VALIDATION HERE
    
        console.log({ email, password });
    
       // const hashedPassword = await hash(password, 10);
    
        const response =
          await sql`INSERT INTO users (email, password) VALUES (${email}, ${password})`;


          console.log({response})

          return response
    

      


}