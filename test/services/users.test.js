const assert = require('assert');
const app = require('../../src/app');

describe('\'users\' service', () => {
    let service;

    it('registered the service', () => {
        service = app.service('users');

        assert.ok(service, 'Registered the service');
    });

    it('Get user', async () => {
        console.log(await service);
    });
});
