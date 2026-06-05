import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
      <p className="text-xs font-mono uppercase tracking-widest text-white/40">
        404
      </p>
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
        We could not find that page.
      </h1>
      <p className="mt-4 text-base text-white/60">
        The link may be old, the URL may be wrong, or the page may have moved.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-white text-neutral-950 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <Link
          href="/#services"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-colors"
        >
          See services
        </Link>
      </div>
    </section>
  );
}
