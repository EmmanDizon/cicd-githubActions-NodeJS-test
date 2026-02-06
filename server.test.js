const request = require('supertest');
const { app, server } = require('./server');

describe('GET /hello', () => {
  afterAll(() => {
    server.close();
  });

  it('should return hello message', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });
});
