'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminChangePassword } from '../../../lib/api';
import { getToken } from '../../../lib/auth';

export default function ChangePasswordPage() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      router.replace('/admin/login');
    }
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }
    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long.');
      return;
    }

    setSaving(true);
    try {
      await adminChangePassword(getToken(), currentPassword, newPassword);
      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  const inputClass = 'w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink';

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <p className="label-eyebrow mb-3">Account security</p>
      <h1 className="font-display text-4xl text-ink mb-8">Change password</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="label-eyebrow block mb-1.5" htmlFor="current-password">
            Current password
          </label>
          <input
            id="current-password"
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="label-eyebrow block mb-1.5" htmlFor="new-password">
            New password
          </label>
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
          <label className="label-eyebrow block mb-1.5" htmlFor="confirm-password">
            Confirm new password
          </label>
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
        {success && (
          <p className="border border-teal text-teal px-4 py-3 label-eyebrow">
            Password changed successfully.
          </p>
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-ink text-paper px-4 py-3 font-body hover:bg-madder transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : 'Change password'}
        </button>
      </form>
    </div>
  );
}