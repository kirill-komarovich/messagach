module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-fourteen',
  browser: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/js/test'],
  testPathIgnorePatterns: ['/node_modules/'],
};
