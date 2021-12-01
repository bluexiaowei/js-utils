# js-utils
javascript 工具函数

## base64ToBlod.ts

> 将 base64 数据 转换成 Blob 数据格式

```javascript
import base64ToBlob from '@/utils/base64ToBlob.ts';
import downloadBlob from '@/utils/downloadBlob.ts';

const fileBlob = base64ToBlob("data:image/png;base64,iVBORw0KGg***");

downloadBlob(fileBlob, 'hello.png')
```


## copyToClipboard

> 将文本信息复制到黏贴版

```javascript
import copyToclipboard from '@/utils/copyToclipboard.ts';

copyToclipboard('hello', function(){ 
    conole.log('success'); 
})
```

## downloadBlob

> 将 blob 转换成文件并下载

```javascript
import base64ToBlob from '@/utils/base64ToBlob.ts';
import downloadBlob from '@/utils/downloadBlob.ts';

const fileBlob = base64ToBlob("data:text/plain;base64,aGVsbG8KIA==");

downloadBlob(fileBlob, 'hello.txt')
```

## downloadString

> 将 blob 转换成文件并下载

```javascript
import downloadString from '@/utils/downloadString.ts';

downloadString('hello', 'hello.txt')
```

## formatData

> 将 blob 转换成文件并下载

```javascript
import formatData from '@/utils/formatData.ts';

const data = {
    a: 1,
    b: '2',
    c: [{ a: 1, b: "2" }],
    d: 'hello'
}

const result = formatData(data, [
    { name: 'a', type: 'string' },
    { name: 'b', type: 'number' },
    { name: 'c', rename: 'c1' },
    { name: 'c', children: [
        { name: 'a' },
        { name: 'b' }
    ]},
    { name: 'd', format: () => 'hello word' }
    { name: 'e', defVal: 'e' }
])

console.log(result);

// {
//     a: '1',
//     b: 2,
//     c: [{ a: 1, b: "2" }],
//     c1: [{ a: 1, b: "2" }],
//     d: 'hello word',
//     e: 'e'
// }
```

## randomPass

> 随机生成 6 位密码

```javascript
import randomPass from '@/utils/randomPass.ts';

randomPass() // 'U4X72R'
randomPass(1) // '6'
randomPass(20) // 'A:3jr7875Zb<a2UPnTSh'
```

## randomUuid

> 随机生成 uuid 不保证唯一

```javascript
import randomUuid from '@/utils/randomUuid.ts';

randomUuid(20) // 'a218bfee-29c3-4e0a-9dc5-0eec77261ead'
```