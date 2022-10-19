import type { Config } from '@jest/types';

const configuration: Config.InitialOptions = {
  cacheDirectory: './jest-cache',
  collectCoverage: true,
  coverageDirectory: './jest-coverage',
  coverageReporters: ['lcov', 'text-summary'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass)$': '<rootDir>/support/tests/style-mock.ts',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/support/tests/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/support/tests/file-transformer.ts',
    '\\.svg$': '<rootDir>/support/tests/svg-transformer.ts',
  },
  verbose: true,
};

export default configuration;
