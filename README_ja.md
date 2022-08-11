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

### ES Module かつ JSX を使用した例

```shell
$ npm i hiroshi
```

```jsx
// option 1: 当ライブラリを React として読み込ませる.
import * as React from 'hiroshi';
// option 2: babel や typescript の jsx トランスパイル設定を適切に変更して読み込む
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
