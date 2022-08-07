# Hiroshi JS

[Japanese Document | 日本語ドキュメント](./README_ja.md)

Dom generation tool compatible with JSX.

It doesn't have the concept of a virtual dom that holds state transitions such as react, preact or vue, nor does it have reactivity like solid js.

But it is a library dedicated to generating very lightweight and simple dom objects.

It can be used in a wide variety of projects and situations, as it focuses solely on creating dom.

## Usage

### UMD format.

It can be used from the following cdn and others.

https://cdn.jsdelivr.net/npm/hiroshi@latest/dist/umd/hiroshi.js  
https://unpkg.com/hiroshi@latest/dist/umd/hiroshi.js

```html
<script src="https://unpkg.com/hiroshi@latest/dist/umd/hiroshi.js"></script>
<script type="text/javascript">
  const c = Hiroshi.createElement;
  const dom = c('div', {className: 'hiroshi', id: '#app'}, ...[
    c('button', {onClick: (e) => alert('Click a button.')}, 'Click me.'),
    c('div', {style: {background: '#cccccc', maxWidth: '20rem'}}, 'Apply style.'),
  ]);
  
  document.body.appendChild(dom);
</script>
```

### ESM format.

```shell
$ npm i hiroshi
```

```javascript
import {createElement as c} from "hiroshi";

const dom = c('div', {className: 'hiroshi', id: '#app'}, ...[
  c('button', {onClick: (e) => alert('Click a button.')}, 'Click me.'), 
  c('div', {style: {background: '#cccccc', maxWidth: '20rem'}}, 'Apply style.'), 
]);

document.body.appendChild(dom);
```