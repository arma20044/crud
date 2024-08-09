'use client'


import { useSearchParams } from 'next/navigation'


import { InputWithLabel } from "@/app/components/ui/InputWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Switch } from "@/components/ui/switch"


import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { actualizarActivitiesById, buscarActivitiesById, crearActivities } from "@/app/actions/activities";
import { useEffect, useState } from 'react';

export default function NamePage() {

    const route = useRouter();

   const searchParams = useSearchParams()


    const dato = searchParams.get('dato')

    
    const [resultado, setResultado] = useState();
    const obtenerById = async()  => {


        const result = await buscarActivitiesById(dato)
        setResultado(result.rows)
        console.log('vamos a buscar: ' + JSON.stringify(result))


    }

    useEffect(() => {
        obtenerById();
    }, [])


    useEffect(() => {
        if(resultado && resultado.length >0) {//setValue('nombre','este')
        //console.log(JSON.stringify(resultado))
        form.setValue('nombre',resultado[0].nombre)
        form.setValue('activo',resultado[0].activo)
        }

    }, [resultado])
    
    

    

    


    
    

    const { register, handleSubmit, watch, formState: { errors } ,setValue} = useForm();

    const formSchema = z.object({
        nombre: z.string({}).min(1, {
            message: 'Debe tener minimo 1 caracteres'
        }).max(20, {
            message: 'Debe tener maximo 20 caracteres'
        }),
        activo: z.boolean(),
        // fechaNacimiento: z.string(),
        // correoElectronico: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           // nombre:resultado && resultado[0].nombre,
            //username: "",
            activo: false
        },
    })

    const { pending } = useFormStatus()

    const onSubmit = async (data) => {

        console.log(JSON.stringify(data));
        console.log(JSON.stringify(dato));
        

        await actualizarActivitiesById({...data,id:dato});

        route.refresh();
        route.back()



    }

    return (
        <main >

            {'resultado:'  + JSON.stringify(resultado)}


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
                                    Aqui va el nombre.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="activo"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel className='py-4'>Activo</FormLabel>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Aqui va el activo.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit" aria-disabled={pending}>Actualizar</Button>
                </form>
            </Form>

        </main>
    );
} 