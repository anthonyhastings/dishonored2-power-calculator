[![TravisCI Badge](https://travis-ci.org/anthonyhastings/dishonored2-power-calculator.svg?branch=master "TravisCI Badge")](https://travis-ci.org/anthonyhastings/dishonored2-power-calculator)
[![Coverage Status](https://coveralls.io/repos/github/anthonyhastings/dishonored2-power-calculator/badge.svg?branch=master)](https://coveralls.io/github/anthonyhastings/dishonored2-power-calculator?branch=master)

## Instructions

Uses Docker.
Interact via Makefile commands; see list by executing the following:
```
make
```


## TODO
- [X] Use Jest for code coverage, mocks, stubs to implement unit tests.
- [X] Implement CI flow via Docker, TravisCI, Coveralls and Heroku.
- [X] Use Redux to manage application state.
- [X] Use React-Router to manage the URL within the application.
- [ ] Redux requesting powers information via `redux-thunk` and `fetch` API.
- [ ] Use `validateUUID` to check a valid character uuid has been supplied in the URL.
- [ ] Hot Module Reloading for JS/SCSS on development environment.
- [ ] Capybara integration tests using PhantomJS (Poltergeist).
- Use a multitude of intermediate "container" components to stop the flood of props. See: https://egghead.io/lessons/javascript-redux-extracting-container-components-filterlink
- Integration testing with Capybara and PhantomJS.
- Webpack static assets (images / stylesheets).
- Postgres container / Rails container for CMS to power "powers".
