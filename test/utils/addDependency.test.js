const addDependency = require('../../src/utils/addDependency');

test('#addDependency', () => {
    const library = 'a';
    const version = '1.0.0';

    const output = {
        devDependencies: {
            [library]: version
        }
    };

    const dependency = { library, version };

    expect(addDependency({})(dependency)).toEqual(output);
});
