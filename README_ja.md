# Hiroshi JS

[English Document | 英語ドキュメント](./README.md)

JSX と互換性のある DOM 生成ツールです。

React や Preact、Vue.js のような状態遷移を保持する仮想 DOM の概念や SolidJS のようなリアクティビディもありません。

ですが、とても軽量でシンプルな DOM オブジェクトを生成するのに特化したライブラリです。

DOM を作成することのみに焦点を当てているため、様々な案件やシチュエーションで使用することが出来ます。

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

以下は JSX コンパイルを使用しない場合のサンプルです。

### UMD format.

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
$ npm i hiroshi@latest
```

```javascript
import {createElement as c} from "hiroshi";

const dom = c('div', {className: 'hiroshi', id: '#app'}, ...[
  c('button', {onClick: (e) => alert('Click a button.')}, 'Click me.'), 
  c('div', {style: {background: '#cccccc', maxWidth: '20rem'}}, 'Apply style.'), 
]);

document.body.appendChild(dom);
```