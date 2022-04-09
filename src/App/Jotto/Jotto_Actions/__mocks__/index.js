/**
 * Need to activate this mock whereever using it
 * example: jest.mock('./actions)
 */
module.exports = {
  ...jest.requireActual("../index.js"),
  __esModule: true,
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve("party"))
};
