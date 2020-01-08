const addCustomEntry = require('../../src/utils/addCustomEntry');

test('#addCustomEntry', () => {
    const customEntry = {
        path: ['a', 'b', 'c'],
        value: true
    };
    const output = { a: { b: { c: true } } };

    expect(addCustomEntry({})(customEntry)).toEqual(output);
});

// module.exports = packageJson => customEntry =>
//     R.assocPath(customEntry.path, customEntry.value, packageJson);
