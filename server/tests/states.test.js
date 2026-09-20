const request = require('supertest');
const app = require('../src/app');

describe('GET /api/states', () => {
  it('returns an array of states', async () => {
    const res = await request(app).get('/api/states');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

describe('GET /api/states/:slug', () => {
  it('returns 404 for a state that does not exist', async () => {
    const res = await request(app).get('/api/states/not-a-real-state-xyz');
    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
  });
});

const { sequelize } = require('../src/models');

afterAll(async () => {
  await sequelize.close();
});