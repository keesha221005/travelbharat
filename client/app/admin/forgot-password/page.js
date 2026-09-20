'use client';

import { useState } from 'react';
import Link from 'next/link';
import { adminForgotPassword } from '../../../lib/api';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await adminForgotPassword(email);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <p className="label-eyebrow mb-3">Account recovery</p>
      <h1 className="font-display text-4xl text-ink mb-8">Forgot password</h1>

      {submitted ? (
        <div className="border border-teal text-teal px-4 py-4 label-eyebrow">
          If an account exists for that email, a password reset link has been sent.
          Check your inbox (and spam folder) — the link expires in 1 hour.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="label-eyebrow block mb-1.5" htmlFor="email">
              Admin email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {loading ? 'Sending…' : 'Send reset link'}
          </button>
        </form>
      )}

      <p className="label-eyebrow mt-6">
        <Link href="/admin/login" className="hover:text-madder">← Back to sign in</Link>
      </p>
    </div>
  );
}