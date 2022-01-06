[![Build Status](https://github.com/anthonyhastings/dishonored2-power-calculator/workflows/test-and-release/badge.svg?branch=master "Build Status")](https://github.com/anthonyhastings/dishonored2-power-calculator/actions?query=workflow%3Atest-and-release+branch%3Amaster)
[![Coverage Status](https://codecov.io/gh/anthonyhastings/dishonored2-power-calculator/branch/master/graph/badge.svg "Coverage Status")](https://codecov.io/gh/anthonyhastings/dishonored2-power-calculator)

## Instructions

Uses Docker.
Interact via Makefile commands; see list by executing the following:
```
make
```

When making changes to this repository, be aware that commit messages (including merge commits) are expected to follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.


## TODO
- [X] Implement CI flow via Docker, Github Actions, Codecov and Heroku.
- [X] Use conventional commits to power semantic releases.
- [X] Setup assets pipeline in Webpack to minify imagery and stylesheets.
- [X] Implement Fast Refresh for React.
- [X] Use Jest for code coverage, mocks, stubs to implement unit tests.
- [X] Replace enzyme usage with Jest snapshotting.
- [X] Use Redux to manage application state, and Axios / Thunks for requests.
- [X] Use React-Router to manage the URL within the application.
- [X] Convert redux usage to utilize redux-toolkit.
- [ ] Use `validateUUID` to check a valid character uuid has been supplied in the URL.
- [ ] Lighthouse integration in CI.
- [ ] Progressive Web Application techniques (Web manifest, Service worker, Install prompt).
- [ ] Component tests with Jest and React Testing Library.
- [ ] End-to-end test suite using Cypress.
