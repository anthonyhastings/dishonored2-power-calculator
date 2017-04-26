import 'jest-enzyme';
import * as matchers from 'jest-immutable-matchers';

beforeEach(function () {
  jasmine.addMatchers(matchers);
});
