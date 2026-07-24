"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/FormFields";

type ContactFormProps = {
  intent?: "general" | "buy" | "sell" | "viewing";
  propertyTitle?: string;
  submitLabel?: string;
};

/**
 * Static-site friendly forms.
 * Submissions are prepared for a future form endpoint; for now we show a
 * calm confirmation state without a backend.
 */
export function ContactForm({
  intent = "general",
  propertyTitle,
  submitLabel = "Send enquiry",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    // Simulate a short, deliberate send for static export demos
    window.setTimeout(() => setStatus("sent"), 600);
  };

  if (status === "sent") {
    return (
      <div
        className="border border-grey-200 bg-grey-50 px-6 py-10 sm:px-8"
        role="status"
      >
        <span
          className="mb-4 block h-1 w-1 rounded-full bg-purple"
          aria-hidden="true"
        />
        <p className="font-serif text-2xl text-black">Thank you</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-grey-600">
          Your message has been received. A member of the Yeselia & Co. team
          will respond with care and discretion, typically within one business
          day.
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
        <Field label="Full name" id="name" required>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" id="email" required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telephone" id="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+00 000 000 000"
          />
        </Field>
        <Field label="Interest" id="interest">
          <Select id="interest" name="interest" defaultValue={intent}>
            <option value="general">General enquiry</option>
            <option value="buy">Buying</option>
            <option value="sell">Selling</option>
            <option value="viewing">Private viewing</option>
          </Select>
        </Field>
      </div>

      {propertyTitle ? (
        <Field label="Property" id="property-display">
          <Input
            id="property-display"
            value={propertyTitle}
            readOnly
            className="bg-grey-50 text-grey-700"
          />
        </Field>
      ) : null}

      <Field
        label="Message"
        id="message"
        required
        hint="Share as much context as you wish. All enquiries are treated in confidence."
      >
        <Textarea
          id="message"
          name="message"
          required
          placeholder="How may we assist you?"
          rows={5}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-grey-500">
          By submitting, you agree to be contacted regarding this enquiry. We
          never share your details.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}
