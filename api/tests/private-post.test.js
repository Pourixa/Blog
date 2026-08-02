const test = require('node:test');
const assert = require('node:assert/strict');

const baseUrl = 'http://127.0.0.1:8585';

test('GET /post/:id returns 404 for a non-public post without auth', async () => {
  const response = await fetch(`${baseUrl}/post/2`);
  const body = await response.json();

  assert.equal(response.status, 404);
  assert.equal(body.message, 'NOT FOUND');
});
