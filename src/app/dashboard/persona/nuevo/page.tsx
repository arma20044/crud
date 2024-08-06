'use client'

import { InputWithLabel } from "@/app/components/ui/InputWithLabel";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { createPersona, listPersonas } from "@/app/helpers/persona/persona";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useFormStatus } from "react-dom";


const formSchema = z.object({
    nombre: z.string({ }).min(1,{
        message:'Debe tener minimo 1 caracteres'        
    }).max(20,{
       message:'Debe tener maximo 20 caracteres'
    }),
    apellido: z.string().min(8,{
        message:'Minimo 8 caracteres'
    }),
    fechaNacimiento: z.string(),
    correoElectronico: z.string()
})



export default function NuevoPage() {

    const { pending } = useFormStatus()

    const route = useRouter();


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {

        console.log('onsubmit crear persona')

        

       const personaCrear = await createPersona(JSON.stringify({
            'nombre': data.nombre,
            'apellido': data.apellido,
            'fecha_nacimiento': data.fechaNacimiento,
            'correo_electronico':data.correoElectronico
          }))

          console.log('personaCrear :' + JSON.stringify(personaCrear))
          
         route.refresh();
          route.back()
           
      

    }

    console.log(watch("example")); // watch input value by passing the name of it



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            //username: "",

        },
    })

    return (
        <div >
            <h1>Hello Nuevo Page</h1>
            <InputWithLabel label="Usuario" inputType="text" placeholder="Ingrese usuario" />
            <br></br>



            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="nombre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre" {...field} />
                                </FormControl>
                                <FormDescription>
                                    asdasd nombre.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="apellido"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Apellido</FormLabel>
                                <FormControl>
                                    <Input placeholder="Apellido" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Aqui va el apellido.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fechaNacimiento"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fecha Nacimiento</FormLabel>
                                <FormControl>
                                    <Input type="date" placeholder="fecha de nacimiento" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Aqui va el Fecha Nacimiento.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="correoElectronico"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo Electronico</FormLabel>
                                <FormControl>
                                    <Input placeholder="Correo Electronico" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Aqui va el Correo Electronico.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" aria-disabled={pending}>Enviar</Button>
                </form>
            </Form>

        </div>
    );
}