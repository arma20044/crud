'use client'

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
import { crearActivities } from "@/app/actions/activities";

export default function NamePage() {

  const route = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

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
      //username: "",
        activo:false
    },
  })

  const { pending } = useFormStatus()

  const onSubmit = async (data) => {

    console.log('onsubmit crear activitie: ' + JSON.stringify(data))


      const crearActivity = await crearActivities(
        {nombre: data.nombre,
          activo: data.activo
        }


      )


    // const activityCrear = await crearActivities({
    // })

    // console.log('personaCrear :' + JSON.stringify(personaCrear))

    route.refresh();
    route.back()



  }

  return (
    <main >




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
          
          
          <Button type="submit" aria-disabled={pending}>Enviar</Button>
        </form>
      </Form>

    </main>
  );
} 