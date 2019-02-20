# sepa-qr-js
Generates SEPA QR codes based on the [European Payments Council's standard](http://www.europeanpaymentscouncil.eu/index.cfm/knowledge-bank/epc-documents/quick-response-code-guidelines-to-enable-data-capture-for-the-initiation-of-a-sepa-credit-transfer/epc069-12-quick-response-code-guidelines-to-enable-data-capture-for-the-initiation-of-a-sepa-credit-transfer1/). These QR codes are scannable by many mobile banking apps.

Uses [qr-image](https://github.com/alexeyten/qr-image) and forwards options for lower level QR manipulation.

> The goal is to get this on par with [sepa-qr-php](https://github.com/smhg/sepa-qr-php), which should be quite feature-complete and tested (PRs appreciated).

## Installation
```bash
npm install sepa-qr
```

## Usage
```js
const createSepaQr = require('sepa-qr');
const {createWriteStream} = require('fs');

createSepaQr({
  name: 'Name of the beneficiary',
  iban: 'BE123456789123456789',
  amount: 100, // in Euro
  remittance: 'Invoice 123456789'
}).pipe(createWriteStream('sepa.png'));
```

### Options
The options below relate to the SEPA standard. All other options are forwarded to **qr-image** (except for ec_level which is always `M`).

#### serviceTag (default: `'BCD'`)
#### version (default: `'002'`)
#### characterSet (default: `createSepaQr.UTF_8`)
#### identification (default: `'SCT'`)
#### bic (default: `''`)
#### name (default: `''`)
#### iban
#### amount (default: `0.01`)
#### purpose (default: `''`)
#### remittance (default: `''`)
#### information (default: `''`)
