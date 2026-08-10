'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  getStates, getCities, adminUpdateState, adminUpdateCity, adminDeleteState, adminDeleteCity
} from '../../../lib/api';
import { getToken } from '../../../lib/auth';

function EditableCard({ item, onSave, onDelete }) {
  const [coverImageUrl, setCoverImageUrl] = useState(item.coverImageUrl || '');
  const [description, setDescription] = useState(item.description || '');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(null);

  async function handleSave() {
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      await onSave({ coverImageUrl, description });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!window.confirm(`Delete "${item.name}" permanently? This cannot be undone, and will also delete anything nested under it (cities/places).`)) {
      return;
    }
    setDeleting(true);
    setError(null);
    try {
      await onDelete();
    } catch (err) {
      setError(err.message);
      setDeleting(false);
    }
  }

  return (
    <div className="border border-line p-4 flex gap-4">
      <div className="relative w-24 h-24 flex-shrink-0 bg-paper-dim">
        {coverImageUrl ? (
          <Image src={coverImageUrl} alt={item.name} fill className="object-cover" sizes="96px" />
        ) : (
          <div className="w-full h-full flex items-center justify-center label-eyebrow text-[9px] text-center px-1">
            No image
          </div>
        )}
      </div>
      <div className="flex-1 space-y-2">
        <p className="font-display text-lg text-ink">{item.name}</p>
        <input
          type="url"
          placeholder="Cover image URL"
          value={coverImageUrl}
          onChange={(e) => setCoverImageUrl(e.target.value)}
          className="w-full border border-ink bg-paper px-3 py-1.5 text-sm font-body text-ink"
        />
        <input
          type="text"
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-ink bg-paper px-3 py-1.5 text-sm font-body text-ink"
        />
        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={saving || deleting}
            className="border border-ink px-3 py-1 text-sm font-body hover:bg-ink hover:text-paper transition-colors disabled:opacity-60"
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
          <button
            onClick={handleDelete}
            disabled={saving || deleting}
            className="border border-madder text-madder px-3 py-1 text-sm font-body hover:bg-madder hover:text-paper transition-colors disabled:opacity-60"
          >
            {deleting ? 'Deleting…' : 'Delete'}
          </button>
          {saved && <span className="label-eyebrow text-teal">Saved</span>}
          {error && <span className="label-eyebrow text-madder">{error}</span>}
        </div>
      </div>
    </div>
  );
}

export default function ManageContentPage() {
  const router = useRouter();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('states');

  useEffect(() => {
    if (!getToken()) {
      router.replace('/admin/login');
      return;
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    setLoading(true);
    const [statesRes, citiesRes] = await Promise.all([getStates(), getCities()]);
    setStates(statesRes.data);
    setCities(citiesRes.data);
    setLoading(false);
  }

  async function saveState(id, payload) {
    await adminUpdateState(getToken(), id, payload);
    setStates((prev) => prev.map((s) => (s.id === id ? { ...s, ...payload } : s)));
  }

  async function saveCity(id, payload) {
    await adminUpdateCity(getToken(), id, payload);
    setCities((prev) => prev.map((c) => (c.id === id ? { ...c, ...payload } : c)));
  }

  async function deleteState(id) {
    await adminDeleteState(getToken(), id);
    setStates((prev) => prev.filter((s) => s.id !== id));
  }

  async function deleteCity(id) {
    await adminDeleteCity(getToken(), id);
    setCities((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <p className="label-eyebrow mb-3">Content management</p>
      <h1 className="font-display text-4xl text-ink mb-8">States &amp; cities</h1>

      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setTab('states')}
          className={`border px-4 py-2 font-body text-sm transition-colors ${
            tab === 'states' ? 'bg-ink text-paper border-ink' : 'border-line text-ink-soft hover:border-ink'
          }`}
        >
          States ({states.length})
        </button>
        <button
          onClick={() => setTab('cities')}
          className={`border px-4 py-2 font-body text-sm transition-colors ${
            tab === 'cities' ? 'bg-ink text-paper border-ink' : 'border-line text-ink-soft hover:border-ink'
          }`}
        >
          Cities ({cities.length})
        </button>
      </div>

      <div className="rule-thick mb-8" />

      {loading && <p className="label-eyebrow">Loading…</p>}

      {!loading && tab === 'states' && (
        <div className="space-y-4">
          {states.map((state) => (
            <EditableCard
              key={state.id}
              item={state}
              onSave={(payload) => saveState(state.id, payload)}
              onDelete={() => deleteState(state.id)}
            />
          ))}
        </div>
      )}

      {!loading && tab === 'cities' && (
        <div className="space-y-4">
          {cities.map((city) => (
            <EditableCard
              key={city.id}
              item={city}
              onSave={(payload) => saveCity(city.id, payload)}
              onDelete={() => deleteCity(city.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}