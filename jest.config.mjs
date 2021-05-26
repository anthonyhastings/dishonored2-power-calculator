const configuration = {
  cacheDirectory: './jest-cache',
  collectCoverage: true,
  coverageDirectory: './jest-coverage',
  coverageReporters: ['lcov', 'text-summary'],
  modulePaths: ['src'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': '<rootDir>/support/tests/style-mock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/support/tests/setup-jest.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/support/tests/file-transformer.js',
  },
  verbose: true,
};

export default configuration;
