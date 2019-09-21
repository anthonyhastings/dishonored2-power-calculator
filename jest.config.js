module.exports = {
  cacheDirectory: './jest-cache',
  collectCoverage: true,
  coverageDirectory: './jest-coverage',
  coverageReporters: ['lcov', 'text-summary'],
  moduleNameMapper: {
    '^Api(.*)$': '<rootDir>/src/api$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Constants(.*)$': '<rootDir>/src/constants$1',
    '^Reducers(.*)$': '<rootDir>/src/reducers$1',
    '\\.(css|scss|sass)$': '<rootDir>/support/tests/style-mock.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/support/tests/file-transformer.js'
  },
  verbose: true
};
