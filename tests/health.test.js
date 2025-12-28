const request = require('supertest');
const app = require('../src/app');

describe('Health Endpoint', () => {
  test('GET /health should return 200 status code', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });

  test('GET /health should return JSON content-type', async () => {
    const response = await request(app).get('/health');
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('GET /health should return correct response body', async () => {
    const response = await request(app).get('/health');
    expect(response.body).toEqual({
      status: 'ok',
      service: 'express-demo'
    });
  });
});
