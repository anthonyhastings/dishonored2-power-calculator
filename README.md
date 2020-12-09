[![Build Status](https://github.com/anthonyhastings/dishonored2-power-calculator/workflows/test-and-release/badge.svg?branch=master "Build Status")](https://github.com/anthonyhastings/dishonored2-power-calculator/actions?query=workflow%3Atest-and-release+branch%3Amaster)
[![Coverage Status](https://codecov.io/gh/anthonyhastings/dishonored2-power-calculator/branch/master/graph/badge.svg "Coverage Status")](https://codecov.io/gh/anthonyhastings/dishonored2-power-calculator)

## Instructions

Uses Docker.
Interact via Makefile commands; see list by executing the following:
```
make
```


## TODO
- [X] Implement CI flow via Docker, TravisCI, Coveralls and Heroku.
- [X] Setup assets pipeline in Webpack to minify imagery and stylesheets.
- [X] Implement HMR (Hot Module Reloading).
- [X] Use Jest for code coverage, mocks, stubs to implement unit tests.
- [X] Replace enzyme usage with Jest snapshotting.
- [X] Use Redux to manage application state.
- [X] Use React-Router to manage the URL within the application.
- [ ] Redux requesting powers information via `redux-thunk` and Axios.
- [ ] Use `validateUUID` to check a valid character uuid has been supplied in the URL.
- [ ] Lighthouse integration in CI.
- [ ] Progressive Web Application techniques (Web manifest, Service worker, Install prompt).
- [ ] Automation suite using Cypress, Cucumber and Gherkin (Given/When/Then).
- [ ] Use a multitude of intermediate "container" components to stop the flood of props. See: https://egghead.io/lessons/javascript-redux-extracting-container-components-filterlink
