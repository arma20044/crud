import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { crearUser } from "@/app/helpers/users";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads");

export const POST = async (req: NextRequest) => {
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = (body.file as Blob) || null;

    console.log(JSON.stringify(body))
    console.log(JSON.stringify((body.file as File).name))

    const nombreArchivo = (body.file as File).name;

    if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        if (!fs.existsSync(UPLOAD_DIR)) {
            fs.mkdirSync(UPLOAD_DIR);
        }

        fs.writeFileSync(
            path.resolve(UPLOAD_DIR, (body.file as File).name),
            buffer
        );


        crearUser({
            avatarUrl: nombreArchivo,
            email: body.email,
            password: body.password
        })
    } else {
        return NextResponse.json({
            success: false,
        });
    }

    return NextResponse.json({
        success: true,
        name: (body.file as File).name,
    });
};