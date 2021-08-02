import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import { expect } from 'chai';
import 'mocha';

chai.use(chaiHttp);
const request = chai.request(app)

describe('Users', () => {
  it('should return user not found', async () => {
    const response = await request.get('/api/user/5000');
    expect(response.status, JSON.stringify(response.body)).eq(404);
  });
  it('should create user', async () => {
    const response = await request
      .post('/api/user')
      .set('content-type', 'application/json')
      .send({
        email: 'user@email.com',
        password: '12345678',
      });
    expect(response.status, JSON.stringify(response.body)).eq(404);
  });
});
