import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="label-eyebrow mb-4">Entry not found</p>
      <h1 className="font-display text-5xl text-ink mb-6">No such page in the index.</h1>
      <p className="font-body text-ink-soft mb-8">
        The place, city, or state you&apos;re looking for isn&apos;t in the gazetteer yet.
      </p>
      <Link href="/" className="inline-block border border-ink px-5 py-2.5 font-body hover:bg-ink hover:text-paper transition-colors">
        Back to the index
      </Link>
    </div>
  );
}
