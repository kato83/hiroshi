/* @jsx h */
import {Fragment, h, render, createRef} from '../src/hiroshi';

test('simply create tag', () => {
  const node = render(<div className='simplyCreateTag' data-foo='bar'>
    <span>simply-create-tag</span>
  </div>);
  const expected = '<div class="simplyCreateTag" data-foo="bar"><span>simply-create-tag</span></div>';
  expect((node as HTMLElement).outerHTML).toEqual(expected);
});

test('support fragment', () => {
  render(<Fragment>
    <div>Child 1</div>
    <div>Child 2</div>
  </Fragment>, document.body);

  expect(document.querySelectorAll('div').length).toEqual(2);
});

test('support createRefObject', () => {
  const ref = createRef<HTMLBRElement>();
  render(<br ref={ref}/>);
  expect(ref.current?.nodeName).toEqual('BR');
});

test('support functional ref', () => {
  render(<br ref={node => expect(node.nodeName).toEqual('BR')}/>);
});