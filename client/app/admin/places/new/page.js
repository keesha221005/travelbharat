'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getStates, getCities, getCategories, adminCreatePlace } from '../../../../lib/api';
import { getToken } from '../../../../lib/auth';

export default function NewPlacePage() {
  const router = useRouter();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    stateId: '', cityId: '', categoryId: '', name: '', description: '',
    historicalSignificance: '', bestTimeToVisit: '', entryFee: '', timings: '',
    mapLink: '', latitude: '', longitude: ''
  });

  useEffect(() => {
    if (!getToken()) {
      router.replace('/admin/login');
      return;
    }
    getStates().then((r) => setStates(r.data)).catch(() => {});
    getCategories().then((r) => setCategories(r.data)).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!form.stateId) { setCities([]); return; }
    const state = states.find((s) => String(s.id) === form.stateId);
    if (state) {
      getCities({ state: state.slug }).then((r) => setCities(r.data)).catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.stateId]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      await adminCreatePlace(getToken(), {
        ...form,
        stateId: Number(form.stateId),
        cityId: Number(form.cityId),
        categoryId: Number(form.categoryId),
        latitude: form.latitude ? Number(form.latitude) : null,
        longitude: form.longitude ? Number(form.longitude) : null
      });
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
      <h1 className="font-display text-4xl text-ink mb-8">Add a place</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <select required value={form.stateId} onChange={(e) => update('stateId', e.target.value)} className={inputClass}>
            <option value="">State…</option>
            {states.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <select required value={form.cityId} onChange={(e) => update('cityId', e.target.value)} className={inputClass} disabled={!form.stateId}>
            <option value="">City…</option>
            {cities.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select required value={form.categoryId} onChange={(e) => update('categoryId', e.target.value)} className={inputClass}>
            <option value="">Category…</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>

        <input required placeholder="Place name" value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} />
        <textarea required placeholder="Description" rows={4} value={form.description} onChange={(e) => update('description', e.target.value)} className={inputClass} />
        <textarea placeholder="Historical significance (optional)" rows={3} value={form.historicalSignificance} onChange={(e) => update('historicalSignificance', e.target.value)} className={inputClass} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input placeholder="Best time to visit" value={form.bestTimeToVisit} onChange={(e) => update('bestTimeToVisit', e.target.value)} className={inputClass} />
          <input placeholder="Entry fee" value={form.entryFee} onChange={(e) => update('entryFee', e.target.value)} className={inputClass} />
          <input placeholder="Timings" value={form.timings} onChange={(e) => update('timings', e.target.value)} className={inputClass} />
          <input placeholder="Map link" value={form.mapLink} onChange={(e) => update('mapLink', e.target.value)} className={inputClass} />
          <input placeholder="Latitude" value={form.latitude} onChange={(e) => update('latitude', e.target.value)} className={inputClass} />
          <input placeholder="Longitude" value={form.longitude} onChange={(e) => update('longitude', e.target.value)} className={inputClass} />
        </div>

        {error && <p className="border border-madder text-madder px-4 py-3 label-eyebrow">{error}</p>}

        <button type="submit" disabled={saving} className="bg-ink text-paper px-5 py-3 font-body hover:bg-madder transition-colors disabled:opacity-60">
          {saving ? 'Saving…' : 'Save as draft'}
        </button>
        <p className="label-eyebrow">
          Places are saved as drafts. Verify &amp; publish from the dashboard once ready
          — and upload images via the API (multipart) or a future image-upload step here.
        </p>
      </form>
    </div>
  );
}
