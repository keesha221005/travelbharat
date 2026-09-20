const request = require('supertest');
const app = require('../src/app');

describe('GET /api/health', () => {
  it('responds with success true', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});

const { sequelize } = require('../src/models');

afterAll(async () => {
  await sequelize.close();
});