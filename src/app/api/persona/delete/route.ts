
import { sql } from '@vercel/postgres';

export async function POST(request: Request) { 

    const {id} = await request.json();

    console.log({id})

    

    const response =
    await sql`UPDATE cars 
    set activo = false
    where id = ${id}`;


    return new Response(JSON.stringify({
        message: `Hello SOFT DELETE: ${JSON.stringify(response)}`
       // message: `${saludo}`
      // message: "hola"
    }), { status: 200 });
}