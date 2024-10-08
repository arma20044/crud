import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";


export async function GET(request: Request) {


  const response = await sql`SELECT * FROM USERS `;

  return new Response(JSON.stringify({
      resultado: response.rows
      // message: `${saludo}`
      // message: "hola"
  }), { status: 200 });
}

export async function POST(request: Request) {
  try {


    const req = await request.json();

    console.log('llego api del: ' + req)
    //console.log('llego api del: ' + id)
    // YOU MAY WANT TO ADD SOME VALIDATION HERE

    //console.log({ email, password });

    //const hashedPassword = await hash(password, 10);

    const response =
      await sql`DELETE FROM users where id = ${req}  `;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}