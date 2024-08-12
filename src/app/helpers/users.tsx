'use server'
import { QueryResult, sql } from "@vercel/postgres";
import { hash } from "bcrypt";
import { revalidatePath } from "next/cache";

interface Props {
    email: string;
    password: string;
    avatarUrl: string;
    file: FileList;
}


export const crearUser = async({email, password,avatarUrl}:Props):Promise<QueryResult> => {
  
    
    
        
        // YOU MAY WANT TO ADD SOME VALIDATION HERE
    
        console.log({ email, password,avatarUrl });

        
        
    
       // const hashedPassword = await hash(password, 10);
    
        const response =
          await sql`INSERT INTO users (email, password, avatar_url) VALUES (${email}, ${password},${avatarUrl})`;


          console.log({response})

          revalidatePath('/dashboard/users')


          return response
    

      


}