# pinyin-initial

一个简单快速获取汉字拼音首字母的库，不能保证所有汉字全覆盖，不支持多音字。主打一个快、内存占用小！
基本原理就是将所有常用汉字的拼音首字母按照 charCode 枚举到添加一个字符串中，传入的汉字根据 charCode 从字符串中反查出对应的拼音首字母。

## 安装

### npm

```bash
npm install pinyin-initial
```

### yarn

```bash
yarn add pinyin-initial
```

### pnpm

```bash
pnpm add pinyin-initial
```

## 使用

```js
import { getPinyinInitial } from 'pinyin-initial';

console.log(getPinyinInitial('一')); // Y
```
