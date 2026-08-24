import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@src/components/ui/Form";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { Button } from "@src/components/ui/Button";

import { contactSchema } from "@src/schemas/ContactSchema";

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
    <div className="w-full">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label={t("contact.form.title")}
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
                <FormControl>
                  <Input
                    label={t("contact.form.name")}
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
                <FormControl>
                  <TextArea
                    label={t("contact.form.message")}
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
            className="w-full"
            variant="gradient"
            type="submit"
            loading={loading}
            disabled={loading}
          >
            {t("contact.form.send")}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormEmail;
