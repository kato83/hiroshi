import {createElement, render} from '../src/hiroshi';

test('not use jsx', () => {
  const node = render(createElement('div', {dataFoo: 'value'}, 'TEXT'));
  expect((node as HTMLElement).outerHTML).toEqual('<div data-foo="value">TEXT</div>');
});