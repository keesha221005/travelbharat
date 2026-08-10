'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminLogin } from '../../../lib/api';
import { saveSession } from '../../../lib/auth';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@travelbharat.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await adminLogin(email, password);
      saveSession(res.data.token, res.data.admin);
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <p className="label-eyebrow mb-3">Restricted entry</p>
      <h1 className="font-display text-4xl text-ink mb-8">Admin sign in</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="label-eyebrow block mb-1.5" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink"
          />
        </div>
        <div>
          <label className="label-eyebrow block mb-1.5" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink"
          />
        </div>

        {error && (
          <p className="border border-madder text-madder px-4 py-3 label-eyebrow">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-ink text-paper px-4 py-3 font-body hover:bg-madder transition-colors disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
