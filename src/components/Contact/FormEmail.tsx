import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { tv } from "tailwind-variants";
import emailjs from "@emailjs/browser";

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

import { contactSchema } from "@src/schemas/ContactSchema";

const formEmailStyles = tv({
  slots: {
    container: "w-full max-w-4xl",
    containerContent: "space-y-6",
    button: "w-full 2xl:text-base",
    text: "text-xs lg:text-sm 2xl:text-base",
  },
});

const { container, containerContent, button, text } = formEmailStyles();

const FormEmail = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      title: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

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
    <Card className={container()}>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={containerContent()}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={text()}>Título</FormLabel>
                  <FormControl>
                    <Input
                      className={text()}
                      placeholder="Título da sua proposta ..."
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={text()}>Nome</FormLabel>
                  <FormControl>
                    <Input
                      className={text()}
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
                  <FormLabel className={text()}>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      className={text()}
                      placeholder="Explique sua proposta ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant={"gradient"} type="submit" className={button()}>
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormEmail;
