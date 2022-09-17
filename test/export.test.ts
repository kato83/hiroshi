import * as Hiroshi from '../src/hiroshi';

test('should has exported properties', () => {
  expect(Hiroshi).toHaveProperty('Fragment');
  expect(Hiroshi).toHaveProperty('h');
  expect(Hiroshi).toHaveProperty('createElement');
  expect(Hiroshi).toHaveProperty('createRef');
  expect(Hiroshi).toHaveProperty('render');
  expect(Hiroshi.default).toHaveProperty('Fragment');
  expect(Hiroshi.default).toHaveProperty('h');
  expect(Hiroshi.default).toHaveProperty('createElement');
  expect(Hiroshi.default).toHaveProperty('createRef');
  expect(Hiroshi.default).toHaveProperty('render');
});