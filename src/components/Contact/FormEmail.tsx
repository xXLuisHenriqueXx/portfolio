import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

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
import { Loader2 } from "lucide-react";

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
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      title: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert(t("contact.alert.error"));
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
        alert(t("contact.alert.success"));
        form.reset();
      })
      .catch((error) => {
        console.log(t("contact.alert.error"), error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div
      className={container()}
      initial={{ translateX: -200, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      viewport={{ once: true }}
    >
      <Card>
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
                    <FormLabel className={text()}>
                      {t("contact.form.title")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={text()}
                        placeholder={t("contact.form.placeholderTitle")}
                        {...field}
                        autoComplete="off"
                        role="input"
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
                    <FormLabel className={text()}>
                      {t("contact.form.name")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={text()}
                        placeholder={t("contact.form.placeholderName")}
                        {...field}
                        autoComplete="off"
                        role="input"
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
                    <FormLabel className={text()}>
                      {t("contact.form.message")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className={text()}
                        placeholder={t("contact.form.placeholderMessage")}
                        {...field}
                        autoComplete="off"
                        role="input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                variant={"gradient"}
                type="submit"
                className={button()}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  t("contact.form.send")
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FormEmail;
