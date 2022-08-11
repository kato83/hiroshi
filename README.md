# Hiroshi JS

[![npm](https://img.shields.io/npm/v/hiroshi)](https://www.npmjs.com/package/hiroshi)
[![NPM](https://img.shields.io/npm/l/hiroshi)](https://github.com/kato83/hiroshi/blob/master/LICENSE.txt)
[![size](http://img.badgesize.io/https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js?label=size)](https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js)
[![gzip size](http://img.badgesize.io/https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js?compression=gzip&label=gzip+size)](https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js)

[Japanese Document | 日本語ドキュメント](./README_ja.md)

Dom generation tool compatible with JSX.

It doesn't have the concept of a virtual dom that holds state transitions such as react, preact or vue, nor does it have reactivity like solid js.

But it is a library dedicated to generating very lightweight (about 1 kB) and simple dom objects.

It can be used in a wide variety of projects and situations, as it focuses solely on creating dom.

⚠ This library is intended for use in situations where React is over-specified and is not a complete replacement solution for React.

## CDN

```text
▼ UMD format
https://cdn.jsdelivr.net/npm/hiroshi@latest/dist/umd/hiroshi.js
https://unpkg.com/hiroshi@latest/dist/umd/hiroshi.js
▼ ESM format
https://cdn.jsdelivr.net/npm/hiroshi@latest/dist/esm/hiroshi.js
https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js
```

## Usage

A sample of JSX in action can be seen below.

[Hiroshi JS Example for ES Module x JSX](https://codepen.io/kato83/pen/zYWLPMP)

### ES Module with JSX.

```shell
$ npm i hiroshi
```

```jsx
// option 1: Load hiroshi as react for jsx transpile.
import * as React from 'hiroshi';
// option 2: Properly configure babel and typescript and load as hiroshi.
// import {createElement, createRef, Fragment} from 'hiroshi';

const Card = (props) => <div className='card'>
  {props.name}<br/>{props.children}
</div>;

const UserList = () => {
  const ref = React.createRef();
  fetch('/api/v1/users').then(res => res.json())
    .then(res => {
      const {current} = ref;
      current.replaceChild(
        <>{res.map(({name, other}) => 
          <Card name={name}>{other}</Card>
        )}</>,
        current.firstElementChild
      );
    });
  
  return <div className={'userList'} ref={ref}>
    <span>Now loading...</span>
  </div>
};

document.getElementById('app').appendChild(UserList());
```

### Universal Module Definition without JSX

```html
<script src="https://unpkg.com/hiroshi@latest/dist/umd/hiroshi.js"></script>
<script type="text/javascript">
  const {createElement, Fragment, createRef} = Hiroshi;
  const c = createElement;
  
  const Card = (props) => c('div', {className: 'card'}, ...[
    props.name,
    c('br'),
    props.children
  ]);

  const UserList = () => {
    const ref = createRef();
    fetch('/api/v1/users').then(res => res.json())
      .then(res => {
        const {current} = ref;
        current.replaceChild(
          c(Fragment, null, ...res.map(({name, other}) => 
            c(Card, {name: name}, other)
          )),
          current.firstElementChild
        );
      });

    return c('div', {className: 'userList', ref: ref}, ...[
      c('span', {}, 'Now loading...')  
    ]);
  };

  document.getElementById('app').appendChild(UserList());
</script>
```
