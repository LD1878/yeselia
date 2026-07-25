"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/FormFields";

export function ValuationForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

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
        <p className="heading-section text-2xl">{t("form.val.thanks.title")}</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-grey-700">
          {t("form.val.thanks.text")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("form.name")} id="v-name" required>
          <Input id="v-name" name="name" type="text" required autoComplete="name" />
        </Field>
        <Field label={t("form.email")} id="v-email" required>
          <Input
            id="v-email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("form.phone")} id="v-phone">
          <Input id="v-phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label={t("form.val.location")} id="v-location" required>
          <Input
            id="v-location"
            name="location"
            type="text"
            required
            placeholder={t("form.val.location.placeholder")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("form.val.type")} id="v-type">
          <Select id="v-type" name="type" defaultValue="Villa">
            <option>Villa</option>
            <option>Apartment</option>
            <option>Penthouse</option>
            <option>Townhouse</option>
            <option>Plot</option>
            <option>Other</option>
          </Select>
        </Field>
        <Field label={t("form.val.size")} id="v-size">
          <Input
            id="v-size"
            name="size"
            type="text"
            placeholder={t("form.val.size.placeholder")}
          />
        </Field>
      </div>

      <Field
        label={t("form.val.notes")}
        id="v-notes"
        hint={t("form.val.notes.hint")}
      >
        <Textarea id="v-notes" name="notes" rows={4} />
      </Field>

      <div className="flex flex-col gap-4 border-t border-grey-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-grey-600">
          {t("form.val.privacy")}
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? t("cta.sending") : t("cta.requestValuation")}
        </Button>
      </div>
    </form>
  );
}
