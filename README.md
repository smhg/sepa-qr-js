# sepa-qr-js

## Installation
```bash
npm install sepa-qr
```

## Usage
```js
const createSepaQr = require('sepa-qr');
const {createWriteStream} = require('fs');

createSepaQr().pipe(createWriteStream('sepa.png'));
```

### Options
The options below relate to the SEPA standard. Additional options are passed to **qr-image** (except for ec_level which is always `M`).

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
