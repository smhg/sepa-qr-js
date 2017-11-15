# sepa-qr-js
Generates SEPA QR codes based on the [European Payments Council's standard](http://www.europeanpaymentscouncil.eu/index.cfm/knowledge-bank/epc-documents/quick-response-code-guidelines-to-enable-data-capture-for-the-initiation-of-a-sepa-credit-transfer/epc069-12-quick-response-code-guidelines-to-enable-data-capture-for-the-initiation-of-a-sepa-credit-transfer1/). These QR codes are scannable by many mobile banking apps.

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

#### serviceTag (default: 'BCD')
#### version (default: '002')
#### characterSet (default: 1)
#### identification (default: 'SCT')
#### bic (default: '')
#### name (default: '')
#### iban
#### amount (default: 0.01)
#### purpose (default: '')
#### remittance (default: '')
#### information (default: '')
