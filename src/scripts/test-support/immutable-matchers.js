import * as matchers from 'jest-immutable-matchers';

export default function applyImmutableMatchers () {
  beforeEach(function () {
    jasmine.addMatchers(matchers);
  });
};
