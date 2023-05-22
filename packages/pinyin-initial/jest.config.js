/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...require('../../jest.config'),
  rootDir: './',
  projects: ['<rootDir>/']
};
