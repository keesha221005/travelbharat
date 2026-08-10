import Link from 'next/link';

/**
 * Groups states by first letter and renders them as an alphabetical
 * gazetteer index — the page's signature structural device, since
 * states are genuinely browsed this way (unlike arbitrary numbering).
 */
export default function StateIndex({ states }) {
  const grouped = states.reduce((acc, state) => {
    const letter = state.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(state);
    return acc;
  }, {});

  const letters = Object.keys(grouped).sort();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
      {letters.map((letter) => (
        <div key={letter} className="mb-10 break-inside-avoid">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-display text-3xl text-madder leading-none">{letter}</span>
            <span className="flex-1 rule" />
          </div>
          <ul className="space-y-1">
            {grouped[letter].map((state) => (
              <li key={state.id}>
                <Link
                  href={`/states/${state.slug}`}
                  className="font-body text-ink hover:text-madder transition-colors flex items-baseline justify-between group py-0.5"
                >
                  <span>{state.name}</span>
                  {state.region && (
                    <span className="label-eyebrow opacity-0 group-hover:opacity-100 transition-opacity">
                      {state.region}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
