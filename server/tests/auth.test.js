const request = require('supertest');
const app = require('../src/app');

describe('POST /api/admin/auth/login', () => {
  it('rejects missing credentials', async () => {
    const res = await request(app).post('/api/admin/auth/login').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('rejects invalid credentials', async () => {
    const res = await request(app)
      .post('/api/admin/auth/login')
      .send({ email: 'nonexistent@example.com', password: 'wrongpassword123' });
    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });
});

describe('Protected admin routes', () => {
  it('rejects requests with no auth token', async () => {
    const res = await request(app).get('/api/admin/places');
    expect(res.statusCode).toBe(401);
  });
});

const { sequelize } = require('../src/models');

afterAll(async () => {
  await sequelize.close();
});