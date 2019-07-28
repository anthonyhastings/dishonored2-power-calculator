module.exports = {
  cacheDirectory: './jest-cache',
  collectCoverage: true,
  coverageDirectory: './jest-coverage',
  coverageReporters: ['lcov', 'text-summary'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': '<rootDir>/src/test-support/style-mock.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test-support/file-transformer.js'
  },
  verbose: true
};
