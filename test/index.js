const assert = require('assert');
const createSepaQr = require('..');
const { Readable } = require('stream');

describe('#()', () => {
  it('should create a stream', () => {
    const stream = createSepaQr({
      name: 'Name of the beneficiary',
      iban: 'BE123456789123456789',
      amount: 100,
      remittance: 'Invoice 123456789'
    });

    assert(stream instanceof Readable);
  });
});
