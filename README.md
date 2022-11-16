[![Build Status](https://github.com/anthonyhastings/dishonored2-power-calculator/actions/workflows/release.yml/badge.svg?branch=main 'Build Status')](https://github.com/anthonyhastings/dishonored2-power-calculator/actions?query=workflow%3Arelease+branch%3Amain)
[![Coverage Status](https://codecov.io/gh/anthonyhastings/dishonored2-power-calculator/branch/main/graph/badge.svg 'Coverage Status')](https://codecov.io/gh/anthonyhastings/dishonored2-power-calculator)

## Instructions

Uses Docker.
Interact via Makefile commands; see list by executing the following:

```
make
```

When making changes to this repository, be aware that commit messages (including merge commits) are expected to follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## TODO

- [x] Implement CI flow via Docker, Github Actions, Codecov and Heroku.
- [x] Use conventional commits to power semantic releases.
- [x] Setup assets pipeline in Vite to minify imagery and HTML markup.
- [x] Implement Fast Refresh for React.
- [x] Use Jest for code coverage, mocks, stubs to implement unit tests.
- [x] Use Redux to manage application state, and Axios / Thunks for requests.
- [x] Use React-Router to manage the URL within the application.
- [x] Convert redux usage to utilize redux-toolkit.
- [ ] Use `validateUUID` to check a valid character uuid has been supplied in the URL.
- [ ] Progressive Web Application techniques (Web manifest, Service worker, Install prompt).
- [ ] Component tests with Jest and React Testing Library.
- [ ] End-to-end test suite using Cypress running against locally spun up service.
