const addScript = require('../../src/utils/addScript');

test('#addScript', () => {
    const name = 'test';
    const command = 'command';

    const script = {
        name,
        command
    };

    const output = {
        scripts: {
            [name]: command
        }
    };

    expect(addScript({})(script)).toEqual(output);
});
