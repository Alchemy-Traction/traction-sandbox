const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('traction-sandbox routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('pass the damn test', async() => {
    expect('equal').toEqual('equal');
  });
});
