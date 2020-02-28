const mathjs = require.requireActual('mathjs');
jest.genMockFromModule('mathjs');
module.exports = mathjs;
