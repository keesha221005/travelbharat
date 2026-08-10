'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminCreateState } from '../../../../lib/api';
import { getToken } from '../../../../lib/auth';

const REGIONS = ['North', 'South', 'East', 'West', 'Central', 'Northeast'];

export default function NewStatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: '', description: '', coverImageUrl: '', region: ''
  });

  useEffect(() => {
    if (!getToken()) router.replace('/admin/login');
  }, [router]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      await adminCreateState(getToken(), form);
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
      <h1 className="font-display text-4xl text-ink mb-8">Add a state</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          required
          placeholder="State name (e.g. Rajasthan)"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className={inputClass}
        />

        <select value={form.region} onChange={(e) => update('region', e.target.value)} className={inputClass}>
          <option value="">Region…</option>
          {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>

        <textarea
          placeholder="Description (optional)"
          rows={4}
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Cover image URL (optional)"
          value={form.coverImageUrl}
          onChange={(e) => update('coverImageUrl', e.target.value)}
          className={inputClass}
        />

        {error && <p className="border border-madder text-madder px-4 py-3 label-eyebrow">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="bg-ink text-paper px-5 py-3 font-body hover:bg-madder transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : 'Save state'}
        </button>
      </form>
    </div>
  );
}