import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@src/components/ui/Field";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { Button } from "@src/components/ui/Button";

import { contactSchema } from "@src/schemas/ContactSchema";
import { CONTACT_DATA } from "@src/static/data/Contact.data";

const FormEmail = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
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

    reset();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup className="space-y-4">
          <Field data-invalid={!!errors.title}>
            <FieldLabel htmlFor="title">{t("contact.form.title")}</FieldLabel>
            <Input
              id="title"
              placeholder={t("contact.form.placeholderTitle")}
              {...register("title")}
              aria-invalid={!!errors.title}
              autoComplete="off"
            />
            <FieldError errors={[errors.title]} />
          </Field>

          <Field data-invalid={!!errors.name}>
            <FieldLabel htmlFor="name">{t("contact.form.name")}</FieldLabel>
            <Input
              id="name"
              placeholder={t("contact.form.placeholderName")}
              {...register("name")}
              aria-invalid={!!errors.name}
              autoComplete="off"
            />
            <FieldError errors={[errors.name]} />
          </Field>

          <Field data-invalid={!!errors.message}>
            <FieldLabel htmlFor="message">{t("contact.form.message")}</FieldLabel>
            <TextArea
              id="message"
              placeholder={t("contact.form.placeholderMessage")}
              {...register("message")}
              aria-invalid={!!errors.message}
              autoComplete="off"
            />
            <FieldError errors={[errors.message]} />
          </Field>

          {feedback && (
            <p className="text-sm text-center text-foreground/80" role="status">
              {feedback}
            </p>
          )}

          <Button
            className="w-full"
            variant="gradient"
            type="submit"
            disabled={loading}
          >
            {loading ? t("contact.form.opening") : t("contact.form.send")}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export default FormEmail;
