const qr = require('qr-image');

function createSepaQr (options = {}) {
  const {
    serviceTag = 'BCD',
    version = '002',
    characterSet = createSepaQr.UTF_8,
    identification = 'SCT',
    bic = '',
    name = '',
    iban,
    amount = 0.01,
    purpose = '',
    remittance = '',
    information = '',
    ...qrOptions
  } = options;

  qrOptions.ec_level = 'M';

  return qr.image(
    [
      serviceTag,
      version,
      characterSet,
      identification,
      bic,
      name,
      iban,
      `EUR${amount}`,
      purpose,
      remittance,
      information
    ].join('\n'),
    qrOptions
  );
};

createSepaQr.UTF_8 = 1;
createSepaQr.ISO_8859_1 = 2;
createSepaQr.ISO_8859_2 = 3;
createSepaQr.ISO_8859_4 = 4;
createSepaQr.ISO_8859_5 = 5;
createSepaQr.ISO_8859_7 = 6;
createSepaQr.ISO_8859_10 = 7;
createSepaQr.ISO_8859_15 = 8;

module.exports = createSepaQr;
