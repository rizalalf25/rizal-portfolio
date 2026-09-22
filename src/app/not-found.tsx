import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-800">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl font-bold text-stone-900">
        Page not found
      </h1>
      <p className="mt-3 text-stone-600">
        That route does not exist on this portfolio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-stone-900 px-5 text-sm font-medium text-white hover:bg-stone-800"
      >
        Back home
      </Link>
    </Container>
  );
}
