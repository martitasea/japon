module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.ts'],
  rootDir: './',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.ts?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }]
  },
  testRegex: '.*\\.spec\\.ts$',
  reporters: [
    'default',
    ['jest-junit', {
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
      suiteNameTemplate: '{filename}'
    }]
  ]
};