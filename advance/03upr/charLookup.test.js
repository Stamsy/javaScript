const lookupChar = require('./charLookup.js');
const { assert } = require('chai');


describe('lookupChar function tests', () => {

    it('Return char at index', () => {
        assert(lookupChar('Love', 0) === 'L')
    });

    it('Return incorrect index', () => {
        assert(lookupChar('Love', 10) === 'Incorrect indeximage.png')
    });

    it('Return incorrect index', () => {
        assert(lookupChar('Love', 10) === 'Incorrect indeximage.png')
    })
})