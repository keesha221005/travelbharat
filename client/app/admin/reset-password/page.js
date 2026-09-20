'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { adminResetPassword } from '../../../lib/api';

function ResetPasswordInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError('This reset link is missing its token. Please request a new one.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long.');
      return;
    }

    setSaving(true);
    try {
      await adminResetPassword(token, newPassword);
      setSuccess(true);
      setTimeout(() => router.push('/admin/login'), 2500);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  const inputClass = 'w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink';

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <p className="label-eyebrow mb-3">Account recovery</p>
      <h1 className="font-display text-4xl text-ink mb-8">Set a new password</h1>

      {!token && (
        <p className="border border-madder text-madder px-4 py-3 label-eyebrow mb-6">
          No reset token found in this link. Please use the link from your email, or request a new one.
        </p>
      )}

      {success ? (
        <p className="border border-teal text-teal px-4 py-4 label-eyebrow">
          Password reset successfully. Redirecting you to sign in…
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="label-eyebrow block mb-1.5" htmlFor="new-password">New password</label>
            <input
              id="new-password"
              type="password"
              required
              minLength={8}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={inputClass}
            />
            <p className="label-eyebrow mt-1.5">At least 8 characters.</p>
          </div>

          <div>
            <label className="label-eyebrow block mb-1.5" htmlFor="confirm-password">Confirm new password</label>
            <input
              id="confirm-password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={inputClass}
            />
          </div>

          {error && (
            <p className="border border-madder text-madder px-4 py-3 label-eyebrow">{error}</p>
          )}

          <button
            type="submit"
            disabled={saving || !token}
            className="w-full bg-ink text-paper px-4 py-3 font-body hover:bg-madder transition-colors disabled:opacity-60"
          >
            {saving ? 'Saving…' : 'Reset password'}
          </button>
        </form>
      )}

      <p className="label-eyebrow mt-6">
        <Link href="/admin/login" className="hover:text-madder">← Back to sign in</Link>
      </p>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md px-6 py-20 label-eyebrow">Loading…</div>}>
      <ResetPasswordInner />
    </Suspense>
  );
}