const {assert} = require('chai');
const israeli_id_helper = require('../index');

describe('israeli-id-helper: generateIsraeliId', function () {
    it('valid without parameter', function () {
        let id = israeli_id_helper.generateIsraeliId();
		assert.equal(id.length, 9);
        assert.isString(id);
    });
	it('valid with parameter', function () {
        let id = israeli_id_helper.generateIsraeliId(true);
		assert.equal(id.length, 9);
        assert.isString(id);
    });
	it('invalid with parameter', function () {
        let id = israeli_id_helper.generateIsraeliId(false);
		assert.equal(id.length, 9);
        assert.isString(id);
    })
});
describe('israeli-id-helper: generateInvalidIsraeliId', function () {
    it('invalid without parameter', function () {
        let id = israeli_id_helper.generateInvalidIsraeliId();
		assert.equal(id.length, 9);
        assert.isString(id);
    })
});
describe('israeli-id-helper: validateIsraeliId', function () {
    it('should pass', function () {
        assert.equal(israeli_id_helper.validateIsraeliId(123456785), false);
        assert.equal(israeli_id_helper.validateIsraeliId(1234567856), false);
        assert.equal(israeli_id_helper.validateIsraeliId(12345678), false);
		assert.equal(israeli_id_helper.validateIsraeliId(1234567), false);
        assert.equal(israeli_id_helper.validateIsraeliId(123456782), true);
        assert.equal(israeli_id_helper.validateIsraeliId("123456782"), true);
        assert.equal(israeli_id_helper.validateIsraeliId("123456785"), false);
		assert.equal(israeli_id_helper.validateIsraeliId("1234567850"), false);
        assert.equal(israeli_id_helper.validateIsraeliId("023456783"), true);
        assert.equal(israeli_id_helper.validateIsraeliId("23456783"), true);
    })
});