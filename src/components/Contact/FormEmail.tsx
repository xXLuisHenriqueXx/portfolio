import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
import { CONTACT_DATA } from "@src/static/data/Contact.data";

const FormEmail = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

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
    setFeedback(t("contact.alert.success"));

    const subject = encodeURIComponent(data.title);
    const body = encodeURIComponent(
      `${t("contact.form.name")}: ${data.name}\n\n${data.message}`,
    );

    const mailtoUrl = `mailto:${CONTACT_DATA.email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, "_blank", "noopener,noreferrer");

    form.reset();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

          {feedback && (
            <p className="text-sm text-center text-foreground/80" role="status">
              {feedback}
            </p>
          )}

          <Button
            className="w-full"
            variant="gradient"
            type="submit"
            loading={loading}
            disabled={loading}
          >
            {loading ? t("contact.form.opening") : t("contact.form.send")}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormEmail;
