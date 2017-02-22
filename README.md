[![TravisCI Badge](https://travis-ci.org/anthonyhastings/dishonored2-power-calculator.svg?branch=master "TravisCI Badge")](https://travis-ci.org/anthonyhastings/dishonored2-power-calculator)
[![Coverage Status](https://coveralls.io/repos/github/anthonyhastings/dishonored2-power-calculator/badge.svg?branch=master)](https://coveralls.io/github/anthonyhastings/dishonored2-power-calculator?branch=master)

## Instructions

Uses Docker.
Interact via Makefile commands; see list by executing the following:
```
make
```


## TODO
- Ensure that I have a good split of "Container" components and presentational "dumb" components.
- Use a multitude of intermediate "container" components to stop the flood of props. See: https://egghead.io/lessons/javascript-redux-extracting-container-components-filterlink
- Use React-Router with Redux and have character-selection, powers-selection screens.
- Integration testing with Capybara and PhantomJS.
- Webpack static assets (images / stylesheets).
- Postgres container / Rails container for CMS to power "powers".
