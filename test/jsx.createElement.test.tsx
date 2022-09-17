/* @jsx createElement */
import {createElement, render} from '../src/hiroshi';

test('simply create tag', () => {
  const node = render(<div><span>simply-create-tag</span></div>);
  const expected = '<div><span>simply-create-tag</span></div>';
  expect((node as HTMLElement).outerHTML).toEqual(expected);
});