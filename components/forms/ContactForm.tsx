"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/FormFields";

type ContactFormProps = {
  intent?: "general" | "buy" | "sell" | "viewing";
  propertyTitle?: string;
  submitLabel?: string;
};

/**
 * Static-site friendly forms.
 * Submissions show a calm confirmation state without a backend.
 */
export function ContactForm({
  intent = "general",
  propertyTitle,
  submitLabel,
}: ContactFormProps) {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const label = submitLabel ?? t("cta.sendEnquiry");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 600);
  };

  if (status === "sent") {
    return (
      <div
        className="border border-grey-200 bg-white px-6 py-10 sm:px-8"
        role="status"
      >
        <span
          className="mb-4 block h-1.5 w-1.5 rounded-full bg-purple"
          aria-hidden="true"
        />
        <p className="heading-section text-2xl">{t("form.thanks.title")}</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-grey-700">
          {t("form.thanks.text")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input type="hidden" name="intent" value={intent} />
      {propertyTitle ? (
        <input type="hidden" name="property" value={propertyTitle} />
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("form.name")} id="name" required>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={t("form.name.placeholder")}
          />
        </Field>
        <Field label={t("form.email")} id="email" required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={t("form.email.placeholder")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("form.phone")} id="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t("form.phone.placeholder")}
          />
        </Field>
        <Field label={t("form.interest")} id="interest">
          <Select id="interest" name="interest" defaultValue={intent}>
            <option value="general">{t("form.interest.general")}</option>
            <option value="buy">{t("form.interest.buy")}</option>
            <option value="sell">{t("form.interest.sell")}</option>
            <option value="viewing">{t("form.interest.viewing")}</option>
          </Select>
        </Field>
      </div>

      {propertyTitle ? (
        <Field label={t("form.property")} id="property-display">
          <Input
            id="property-display"
            value={propertyTitle}
            readOnly
            className="bg-grey-50 text-grey-800"
          />
        </Field>
      ) : null}

      <Field label={t("form.message")} id="message" required hint={t("form.message.hint")}>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t("form.message.placeholder")}
          rows={5}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-grey-600">{t("form.privacy")}</p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? t("cta.sending") : label}
        </Button>
      </div>
    </form>
  );
}
