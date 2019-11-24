# Israeli ID Helper

## Overview
This project purpose is to provide helper methods for handling israeli id.

## How to use

```
const israeli_id_helper = require('israeli-id-helper');
console.log(israeli_id_helper.generateIsraeliId()); // 386404131
console.log(israeli_id_helper.generateIsraeliId(false)); // 248110656
console.log(israeli_id_helper.generateInvalidIsraeliId()); // 134378970
console.log(israeli_id_helper.validateIsraeliId(123456782)); // true
```
