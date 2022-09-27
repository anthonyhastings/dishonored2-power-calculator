import { toKebabCase } from '../to-kebab-case';

describe('#toKebabCase', () => {
  it.each([
    ['HelloWorld', 'hello-world'],
    ['Foo Bar', 'foo-bar'],
    ['Ping_Pong', 'ping-pong'],
  ])('converts string of %s to kebab case as %s', (input, result) => {
    expect(toKebabCase(input)).toEqual(result);
  });
});
