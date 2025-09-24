import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";
import { contactSchema } from "@src/schemas/ContactSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const FormEmail = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      title: "",
      // email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    console.log(serviceId, templateId, publicKey);

    if (!serviceId || !templateId || !publicKey) {
      alert("Ocorreu um erro, tente novamente.");
      return;
    }

    const templateParams = {
      title: data.title,
      name: data.name,
      message: data.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      })
      .catch((error) => {
        console.log("Ocorreu um erro, tente novamente. Erro: ", error);
      });
  };

  return (
    <Card className="w-full">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Título</FormLabel>
                  <FormControl>
                    <Input
                      className="text-xs"
                      placeholder="Título da sua proposta ..."
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">E-mail</FormLabel>
                  <FormControl>
                    <Input
                      className="text-xs"
                      placeholder="seuemail@exemplo.com"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Nome</FormLabel>
                  <FormControl>
                    <Input
                      className="text-xs"
                      placeholder="Nome ..."
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      className="text-xs"
                      placeholder="Explique sua proposta ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant={"gradient"} type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormEmail;
