var assert = require('assert')
var validator = require('../../gocy-validator')

describe('Validator', function () {
    describe('#containsOnlyEnglish', function () {
        it('should return true when a string contains only english characters', function () {
            if (validator.containsOnlyEnglish('Aabc') == false) {
                throw new Error('Validator#containsOnlyEnglish is not right')
            }
        })
    })
})