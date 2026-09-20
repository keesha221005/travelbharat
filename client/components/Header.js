import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight text-ink">
            Travel<span className="text-madder">Bharat</span>
          </span>
          <span className="hidden sm:inline label-eyebrow">est. digital gazetteer</span>
        </Link>

        <nav className="flex items-center gap-6 font-body text-sm text-ink-soft">
          <Link href="/" className="hover:text-madder transition-colors">States</Link>
          <Link href="/search" className="hover:text-madder transition-colors">Search</Link>
          <Link
            href="/admin/login"
            className="border border-ink px-3 py-1.5 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}