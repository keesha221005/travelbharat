'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getStates, adminCreateCity } from '../../../../lib/api';
import { getToken } from '../../../../lib/auth';

export default function NewCityPage() {
  const router = useRouter();
  const [states, setStates] = useState([]);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    stateId: '', name: '', description: '', coverImageUrl: ''
  });

  useEffect(() => {
    if (!getToken()) {
      router.replace('/admin/login');
      return;
    }
    getStates().then((r) => setStates(r.data)).catch(() => {});
  }, [router]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      await adminCreateCity(getToken(), { ...form, stateId: Number(form.stateId) });
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  const inputClass = 'w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink';

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <p className="label-eyebrow mb-3">New entry</p>
      <h1 className="font-display text-4xl text-ink mb-8">Add a city</h1>

      {states.length === 0 && (
        <p className="border border-madder text-madder px-4 py-3 label-eyebrow mb-6">
          No states yet — add a state first before adding a city.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <select
          required
          value={form.stateId}
          onChange={(e) => update('stateId', e.target.value)}
          className={inputClass}
          disabled={states.length === 0}
        >
          <option value="">State…</option>
          {states.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>

        <input
          required
          placeholder="City name (e.g. Jaipur)"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className={inputClass}
          disabled={states.length === 0}
        />

        <textarea
          placeholder="Description (optional)"
          rows={4}
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          className={inputClass}
          disabled={states.length === 0}
        />

        <input
          placeholder="Cover image URL (optional)"
          value={form.coverImageUrl}
          onChange={(e) => update('coverImageUrl', e.target.value)}
          className={inputClass}
          disabled={states.length === 0}
        />

        {error && <p className="border border-madder text-madder px-4 py-3 label-eyebrow">{error}</p>}

        <button
          type="submit"
          disabled={saving || states.length === 0}
          className="bg-ink text-paper px-5 py-3 font-body hover:bg-madder transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : 'Save city'}
        </button>
      </form>
    </div>
  );
}