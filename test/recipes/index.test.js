const recipes = require('../../src/recipes');

test('#recipes', () => {
    expect(recipes).not.toEqual([]);

    recipes.forEach(recipe => {
        expect(recipe).not.toEqual({});
    });
});
