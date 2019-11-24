'use strict';
function generateIsraeliId(valid = true) {
	if (valid) {
        let found = false;
        while (!found) {
            // ***Create random number
            let randNum = Math.floor((Math.random() * 99999999) + 1);
            let finalId;

            // ***Calculate check digit
            let idNum = randNum.toString().length < 8 ? ('00000000' + randNum).slice(-8) : randNum;
            let id = (idNum.toString()).split('');
            let checkDigit = 0;
            for (let i = 0; i < 8; i++) {
                let num = id[i]*((i%2)+1);
                checkDigit += num > 9 ? num -= 9 : num;
            }
            if (checkDigit % 10 !== 0)
                checkDigit = 10 - (checkDigit % 10);
            else
                checkDigit = 0;

            finalId = idNum.toString() + checkDigit;

            // ***Check final ID is valid
            let isValid = validateIsraeliId(finalId);
			if (isValid) {
				found = true;
				return finalId;
			}
        }
    } else {
		return generateInvalidIsraeliId();
	}
}
function generateInvalidIsraeliId() {
	let found = false;
	while (!found) {
		let randNum = Math.floor((Math.random() * 999999999) + 1);
		let finalId = randNum.toString().length < 9 ? ('000000000' + randNum).slice(-9) : randNum.toString();
		
		// ***Check final ID is invalid
		let isValid = validateIsraeliId(finalId);
		if (!isValid) {
			found = true;
			return finalId;
		}		
	}
}
function validateIsraeliId(id) {
	let finalId = id.toString().length < 9 ? ('000000000' + id).slice(-9) : id;
	let idToCheck = (finalId.toString()).split('');
	if (idToCheck.length === 9) {
		let result = 0;
		for (let i = 0; i < 9; i++) {
			let num = idToCheck[i];
			num *= (i % 2) + 1;
			result += num > 9 ? num -= 9 : num;
		}
		if (result % 10 === 0) {
			return true;
		}
	}
	return false;
}

module.exports = {
	generateIsraeliId,
	generateInvalidIsraeliId,
	validateIsraeliId
};