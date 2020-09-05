const functions = require('./findResult');

//10101000010000

test('Test with 10101000010000', () =>
{
    expect(functions.convertAndCompare('10101000010000')).toBe('10768');
});