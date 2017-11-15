const qr = require('qr-image');

function createSepaQr (options = {}) {
  const {
    serviceTag = 'BCD',
    version = '002',
    characterSet = 1,
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

module.exports = createSepaQr;
