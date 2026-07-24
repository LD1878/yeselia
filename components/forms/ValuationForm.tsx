"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/FormFields";

export function ValuationForm() {
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
          className="mb-4 block h-1 w-1 rounded-full bg-purple"
          aria-hidden="true"
        />
        <p className="font-serif text-2xl text-black">Valuation request received</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-grey-600">
          Thank you. Your request is confidential. We will be in touch shortly
          to arrange a private discussion, with no obligation and no public
          listing unless you instruct us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" id="v-name" required>
          <Input id="v-name" name="name" type="text" required autoComplete="name" />
        </Field>
        <Field label="Email" id="v-email" required>
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
        <Field label="Telephone" id="v-phone">
          <Input id="v-phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="Property location" id="v-location" required>
          <Input
            id="v-location"
            name="location"
            type="text"
            required
            placeholder="e.g. Sierra Blanca, Marbella"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Property type" id="v-type">
          <Select id="v-type" name="type" defaultValue="Villa">
            <option>Villa</option>
            <option>Apartment</option>
            <option>Penthouse</option>
            <option>Townhouse</option>
            <option>Plot</option>
            <option>Other</option>
          </Select>
        </Field>
        <Field label="Approximate size" id="v-size">
          <Input
            id="v-size"
            name="size"
            type="text"
            placeholder="Built m² / plot m²"
          />
        </Field>
      </div>

      <Field
        label="Confidential notes"
        id="v-notes"
        hint="Optional. Share any context that would help us prepare."
      >
        <Textarea id="v-notes" name="notes" rows={4} />
      </Field>

      <div className="flex flex-col gap-4 border-t border-grey-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-grey-500">
          Your enquiry is private. We do not list or promote your property
          without written instruction.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request valuation"}
        </Button>
      </div>
    </form>
  );
}
