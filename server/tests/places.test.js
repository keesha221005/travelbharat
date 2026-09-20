const request = require('supertest');
const app = require('../src/app');

describe('GET /api/places', () => {
  it('returns paginated published places', async () => {
    const res = await request(app).get('/api/places?limit=5');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeLessThanOrEqual(5);
    expect(res.body.meta).toHaveProperty('total');
  });
});

describe('GET /api/places/:slug', () => {
  it('returns 404 for a nonexistent place', async () => {
    const res = await request(app).get('/api/places/not-a-real-place-xyz');
    expect(res.statusCode).toBe(404);
  });
});

const { sequelize } = require('../src/models');

afterAll(async () => {
  await sequelize.close();
});