import { NextResponse, NextRequest } from 'next/server'
import { sql } from '@vercel/postgres';
 
 

export async function GET(request: Request) {
    //const path = request.nextUrl.searchParams// .get('path')

    //console.log({path})

    
 
      

    const response =
        await sql`SELECT * FROM persona `;

    // return new Response(JSON.stringify({
    //     respuestaListar: `${response.rows}`
    // }), { status: 200 });

     
    //return NextResponse.json(response.rows)

    //revalidatePath('/api/persona')
    //return Response.json({ revalidated: true, now: Date.now(), res: response.rows })


    return NextResponse.json(response.rows,{status:200})

}


 


export async function POST(request: Request, context: { params: { saludo: string } }) {

    //brand VARCHAR(255),
  //model VARCHAR(255),
  //year INT

  try{

    const { nombre, apellido,fecha_nacimiento,correo_electronico } = await request.json();

   // const { saludo } = context.params

    const response =
    await sql`INSERT INTO persona (nombre, apellido,fecha_nacimiento, correo_electronico) VALUES (${nombre}, ${apellido}, ${fecha_nacimiento}, ${correo_electronico})`;

    console.log('exxx:'  + JSON.stringify(response))

    return new Response(JSON.stringify({
        message: `Hello INSERT PERSONA: ${JSON.stringify(response)}`
       // message: `${saludo}`
      // message: "hola"
    }), { status: 200 });

}
catch(err){

    console.log("ERROR INSER PERSONA: " + JSON.stringify(err))

    return new Response(JSON.stringify({
        message: `Error al insertar persona. error: ${err}`
       // message: `${saludo}`
      // message: "hola"
    }), { status: 500 });
}


}


 

export async function DELETE(request: Request) { 

    console.log({request})

    const { id } = await request.json();

    // const { saludo } = context.params
 
     const response =
     await sql`DELETE from persona where id = ${id}`;
 
 
     return new Response(JSON.stringify({
         message: `Hello DELETE PERSONA: ${JSON.stringify(response)}`
        // message: `${saludo}`
       // message: "hola"
     }), { status: 200 });
 
}
