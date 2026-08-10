'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import {
  getStates, getCities, getCategories,
  adminGetPlace, adminUpdatePlace, adminUploadPlaceImages,
  adminDeletePlaceImage, adminAddPlaceImageUrl
} from '../../../../../lib/api';
import { getToken } from '../../../../../lib/auth';

export default function EditPlacePage() {
  const router = useRouter();
  const params = useParams();
  const placeId = params.id;

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [addingUrl, setAddingUrl] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState(null);

  useEffect(() => {
    if (!getToken()) {
      router.replace('/admin/login');
      return;
    }
    loadEverything();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadEverything() {
    setLoading(true);
    try {
      const [placeRes, statesRes, categoriesRes] = await Promise.all([
        adminGetPlace(getToken(), placeId),
        getStates(),
        getCategories()
      ]);

      const place = placeRes.data;
      setStates(statesRes.data);
      setCategories(categoriesRes.data);
      setImages(place.images || []);

      const citiesRes = await getCities({ state: place.state.slug });
      setCities(citiesRes.data);

      setForm({
        stateId: String(place.stateId),
        cityId: String(place.cityId),
        categoryId: String(place.categoryId),
        name: place.name,
        description: place.description || '',
        historicalSignificance: place.historicalSignificance || '',
        bestTimeToVisit: place.bestTimeToVisit || '',
        entryFee: place.entryFee || '',
        timings: place.timings || '',
        mapLink: place.mapLink || '',
        latitude: place.latitude || '',
        longitude: place.longitude || ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleStateChange(stateId) {
    update('stateId', stateId);
    update('cityId', '');
    const stateRecord = states.find((s) => String(s.id) === stateId);
    if (stateRecord) {
      const res = await getCities({ state: stateRecord.slug });
      setCities(res.data);
    }
  }

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      await adminUpdatePlace(getToken(), placeId, {
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

  async function handleImageUpload(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError(null);
    try {
      const res = await adminUploadPlaceImages(getToken(), placeId, files);
      setImages((prev) => [...prev, ...res.data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  async function handleImageDelete(imageId) {
    if (!window.confirm('Remove this image?')) return;
    try {
      await adminDeletePlaceImage(getToken(), placeId, imageId);
      setImages((prev) => prev.filter((img) => img.id !== imageId));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleAddImageUrl(e) {
    e.preventDefault();
    if (!imageUrlInput.trim()) return;

    setAddingUrl(true);
    setError(null);
    try {
      const res = await adminAddPlaceImageUrl(getToken(), placeId, imageUrlInput.trim());
      setImages((prev) => [...prev, res.data]);
      setImageUrlInput('');
    } catch (err) {
      setError(err.message);
    } finally {
      setAddingUrl(false);
    }
  }

  const inputClass = 'w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink';

  if (loading || !form) {
    return <div className="mx-auto max-w-2xl px-6 py-14 label-eyebrow">Loading place…</div>;
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <p className="label-eyebrow mb-3">Editing entry #{placeId}</p>
      <h1 className="font-display text-4xl text-ink mb-8">Edit place</h1>

      {/* Image management */}
      <div className="border border-ink p-6 mb-10">
        <p className="label-eyebrow mb-4">Images</p>

        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-5">
            {images.map((img) => (
              <div key={img.id} className="relative aspect-square bg-paper-dim group">
                <Image src={img.imageUrl} alt={img.altText || ''} fill className="object-cover" sizes="120px" />
                {img.isCover && (
                  <span className="absolute top-1 left-1 bg-madder text-paper text-[10px] px-1.5 py-0.5 label-eyebrow">
                    Cover
                  </span>
                )}
                <button
                  onClick={() => handleImageDelete(img.id)}
                  className="absolute inset-0 bg-ink/70 text-paper opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-sm font-body"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <label className="inline-block border border-ink px-4 py-2 font-body text-sm cursor-pointer hover:bg-ink hover:text-paper transition-colors">
          {uploading ? 'Uploading…' : '+ Upload images'}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={handleImageUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
        <p className="label-eyebrow mt-2 mb-5">JPEG, PNG, or WEBP. Up to 10 at a time, 5MB each.</p>

        <div className="rule mb-5" />

        <p className="label-eyebrow mb-2">Or add by image URL</p>
        <form onSubmit={handleAddImageUrl} className="flex gap-2">
          <input
            type="url"
            required
            placeholder="https://example.com/image.jpg"
            value={imageUrlInput}
            onChange={(e) => setImageUrlInput(e.target.value)}
            className="flex-1 border border-ink bg-paper px-3 py-2 font-body text-sm text-ink"
          />
          <button
            type="submit"
            disabled={addingUrl}
            className="border border-ink px-4 py-2 font-body text-sm hover:bg-ink hover:text-paper transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {addingUrl ? 'Adding…' : 'Add'}
          </button>
        </form>
        <p className="label-eyebrow mt-2">
          Paste a direct image link — right-click an image anywhere and choose
          &quot;Copy image address&quot; to get one.
        </p>
      </div>

      {/* Details form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <select value={form.stateId} onChange={(e) => handleStateChange(e.target.value)} className={inputClass}>
            {states.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <select value={form.cityId} onChange={(e) => update('cityId', e.target.value)} className={inputClass}>
            {cities.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select value={form.categoryId} onChange={(e) => update('categoryId', e.target.value)} className={inputClass}>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>

        <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} placeholder="Place name" />
        <textarea required rows={4} value={form.description} onChange={(e) => update('description', e.target.value)} className={inputClass} placeholder="Description" />
        <textarea rows={3} value={form.historicalSignificance} onChange={(e) => update('historicalSignificance', e.target.value)} className={inputClass} placeholder="Historical significance" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input value={form.bestTimeToVisit} onChange={(e) => update('bestTimeToVisit', e.target.value)} className={inputClass} placeholder="Best time to visit" />
          <input value={form.entryFee} onChange={(e) => update('entryFee', e.target.value)} className={inputClass} placeholder="Entry fee" />
          <input value={form.timings} onChange={(e) => update('timings', e.target.value)} className={inputClass} placeholder="Timings" />
          <input value={form.mapLink} onChange={(e) => update('mapLink', e.target.value)} className={inputClass} placeholder="Map link" />
          <input value={form.latitude} onChange={(e) => update('latitude', e.target.value)} className={inputClass} placeholder="Latitude" />
          <input value={form.longitude} onChange={(e) => update('longitude', e.target.value)} className={inputClass} placeholder="Longitude" />
        </div>

        {error && <p className="border border-madder text-madder px-4 py-3 label-eyebrow">{error}</p>}

        <button type="submit" disabled={saving} className="bg-ink text-paper px-5 py-3 font-body hover:bg-madder transition-colors disabled:opacity-60">
          {saving ? 'Saving…' : 'Save changes'}
        </button>
      </form>
    </div>
  );
}