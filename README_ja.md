# Hiroshi JS

[![npm](https://img.shields.io/npm/v/hiroshi)](https://www.npmjs.com/package/hiroshi)
[![NPM](https://img.shields.io/npm/l/hiroshi)](https://github.com/kato83/hiroshi/blob/master/LICENSE.txt)
[![size](http://img.badgesize.io/https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js?label=size)](https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js)
[![gzip size](http://img.badgesize.io/https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js?compression=gzip&label=gzip+size)](https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js)

[English Document | 英語ドキュメント](./README.md)

JSX と互換性のある DOM 生成ツールです。

React や Preact、Vue.js のような状態遷移を保持する仮想 DOM の概念や SolidJS のようなリアクティビディもありません。

ですが、とても軽量（約1KB）でシンプルな DOM オブジェクトを生成するのに特化したライブラリです。

DOM を作成することのみに焦点を当てているため、様々な案件やシチュエーションで使用することが出来ます。

⚠ 本ライブラリは、React ではオーバースペックな場面での利用を想定しており、React の完全な代替ソリューションではありません。

## CDN

```text
▼ UMD format
https://cdn.jsdelivr.net/npm/hiroshi@latest/dist/umd/hiroshi.js
https://unpkg.com/hiroshi@latest/dist/umd/hiroshi.js
▼ ESM format
https://cdn.jsdelivr.net/npm/hiroshi@latest/dist/esm/hiroshi.js
https://unpkg.com/hiroshi@latest/dist/esm/hiroshi.js
```

## 使い方

JSX を実際に使用したサンプルは以下から確認できます。

[Hiroshi JS Example for ES Module x JSX](https://codepen.io/kato83/pen/zYWLPMP)

以下2つの異なるソースコードは、どちらも同じ表示結果となります。

### ES Module かつ JSX を使用した例

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

### ES Module を用いて JSX を使用しない例

```html
<script src="//unpkg.com/hiroshi@latest/dist/umd/hiroshi.js"></script>
<script type="text/javascript">
  const {createElement, Fragment, createRef, render} = Hiroshi;
  const h = createElement;

  const Card = (props) => h('div', {className: 'card'}, ...[
    props.name,
    h('br'),
    props.children
  ]);

  const UserList = () => {
    const ref = createRef();
    fetch('/api/v1/users').then(res => res.json())
      .then(res => {
        const {current} = ref;
        current.replaceChild(
          h(Fragment, null, ...res.map(({name, other}) =>
            h(Card, {name: name}, other)
          )),
          current.firstElementChild
        );
      });

    return h('div', {className: 'userList', ref: ref}, ...[
      h('span', {}, 'Now loading...')
    ]);
  };

  render(c(UserList), document.getElementById('app'));
</script>
```
