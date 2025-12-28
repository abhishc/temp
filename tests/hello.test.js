const request = require('supertest');
const app = require('../src/app');

describe('Hello Endpoint', () => {
  test('GET / should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('GET / should return text/plain content-type', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toMatch(/text\/plain/);
  });

  test('GET / should return "Hello, World!" as plain text', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
  });
});
