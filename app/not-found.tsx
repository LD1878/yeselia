import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-7 lg:px-10">
        <span
          className="mx-auto mb-6 block h-1 w-1 rounded-full bg-purple"
          aria-hidden="true"
        />
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-grey-500">
          404
        </p>
        <h1 className="mt-4 font-serif text-3xl text-black sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-grey-600">
          The page you requested does not exist or has been moved. Return home
          or browse the collection.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Home</Button>
          <Button href="/properties/" variant="secondary">
            Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
