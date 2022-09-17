/* @jsx h */
import {createRef, Fragment, h, render} from '../src/hiroshi';

declare module '../src/hiroshi' {
  namespace h.JSX {
    interface IntrinsicElements {
      'custom-element': h.JSX.HTMLElementAttribute<HTMLElement> & {
        bool: boolean
      }
    }
  }
}

test('simply create tag', () => {
  const node = render(<div className='simplyCreateTag' data-foo='bar' style={{display: 'none', marginBottom: '1rem'}}>
    <span>simply-create-tag</span>
  </div>);
  const expected = '<div class="simplyCreateTag" data-foo="bar" style="display: none; margin-bottom: 1rem;"><span>simply-create-tag</span></div>';
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
  render(<br ref={(node: HTMLBRElement) => expect(node.nodeName).toEqual('BR')}/>);
});

test('boolean attribute', () => {
  const node = render(<input disabled={true} type={'checkbox'}/>);
  expect((node as HTMLElement).outerHTML).toEqual('<input disabled="" type="checkbox">');
})

test('svg', () => {
  const node = render(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>);
  expect((node as Element).outerHTML).toEqual('<svg viewBox="0 0 512 512"></svg>');
});

test('custom element', () => {
  const node = render(<custom-element bool={true}>TEST</custom-element>);
  expect((node as Element).outerHTML).toEqual('<custom-element bool="">TEST</custom-element>');
})