import * as supertest from 'supertest';
import { server } from '../../__mocks__/mockServer';

jest.mock('./population.service');

it('should return an availability response', done => {
    supertest(server)
    .get('/brastlewark/api/population')
    .expect(200)
    .then(res => {
        expect(res.body).toHaveProperty('Brastlewark', expect.any(Array));
        done();
    });
});
