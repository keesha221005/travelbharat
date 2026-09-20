const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    cache: options.cache || 'no-store'
  });

  const body = await res.json().catch(() => null);

  if (!res.ok) {
    const message = body?.message || `Request failed with status ${res.status}`;
    throw new Error(message);
  }

  return body;
}

// ---- Public reads ----
export const getStates = () => request('/states');
export const getState = (slug) => request(`/states/${slug}`);
export const getCities = (params = {}) => request(`/cities?${new URLSearchParams(params)}`);
export const getCity = (slug) => request(`/cities/${slug}`);
export const getCategories = () => request('/categories');
export const getPlaces = (params = {}) => request(`/places?${new URLSearchParams(params)}`);
export const getPlace = (slug) => request(`/places/${slug}`);
export const getNearbyPlaces = (slug, limit = 6) => request(`/places/${slug}/nearby?limit=${limit}`);

// ---- Admin (JWT protected) ----
export const adminLogin = (email, password) => request('/admin/auth/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
});

export const adminMe = (token) => request('/admin/auth/me', {
  headers: { Authorization: `Bearer ${token}` }
});

export const adminCreatePlace = (token, payload) => request('/admin/places', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify(payload)
});

export const adminGetPlaces = (token, params = {}) => request(`/admin/places?${new URLSearchParams(params)}`, {
  headers: { Authorization: `Bearer ${token}` }
});

export const adminGetPlace = (token, id) => request(`/admin/places/${id}`, {
  headers: { Authorization: `Bearer ${token}` }
});

export const adminUpdatePlace = (token, id, payload) => request(`/admin/places/${id}`, {
  method: 'PUT',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify(payload)
});

export const adminCreateState = (token, payload) => request('/admin/states', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify(payload)
});

export const adminUpdateState = (token, id, payload) => request(`/admin/states/${id}`, {
  method: 'PUT',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify(payload)
});

export const adminCreateCity = (token, payload) => request('/admin/cities', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify(payload)
});

export const adminUpdateCity = (token, id, payload) => request(`/admin/cities/${id}`, {
  method: 'PUT',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify(payload)
});

export const adminDeleteState = (token, id) => request(`/admin/states/${id}`, {
  method: 'DELETE',
  headers: { Authorization: `Bearer ${token}` }
});

export const adminDeleteCity = (token, id) => request(`/admin/cities/${id}`, {
  method: 'DELETE',
  headers: { Authorization: `Bearer ${token}` }
});

export const adminVerifyPlace = (token, id) => request(`/admin/places/${id}/verify`, {
  method: 'PATCH',
  headers: { Authorization: `Bearer ${token}` }
});

export const adminDeletePlace = (token, id) => request(`/admin/places/${id}`, {
  method: 'DELETE',
  headers: { Authorization: `Bearer ${token}` }
});

// Image upload is multipart/form-data, so it can't go through the JSON `request`
// helper above — the browser needs to set its own Content-Type with a boundary.
export async function adminUploadPlaceImages(token, placeId, files) {
  const formData = new FormData();
  Array.from(files).forEach((file) => formData.append('images', file));

  const res = await fetch(`${API_BASE}/admin/places/${placeId}/images`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData
  });

  const body = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(body?.message || `Upload failed with status ${res.status}`);
  }

  return body;
}

export const adminDeletePlaceImage = (token, placeId, imageId) => request(`/admin/places/${placeId}/images/${imageId}`, {
  method: 'DELETE',
  headers: { Authorization: `Bearer ${token}` }
});

export const adminAddPlaceImageUrl = (token, placeId, imageUrl, altText) => request(`/admin/places/${placeId}/images/url`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify({ imageUrl, altText })
});

export const adminChangePassword = (token, currentPassword, newPassword) => request('/admin/auth/password', {
  method: 'PUT',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify({ currentPassword, newPassword })
});

export const adminForgotPassword = (email) => request('/admin/auth/forgot-password', {
  method: 'POST',
  body: JSON.stringify({ email })
});

export const adminResetPassword = (token, newPassword) => request('/admin/auth/reset-password', {
  method: 'POST',
  body: JSON.stringify({ token, newPassword })
});

export { API_BASE };