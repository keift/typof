[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[Buffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[Void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined
[Null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
[Undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined

<!---->

[Types]: ./src/types/Types.type.ts

<div align="center">
  <br/>
  <img src="./assets/logo.png" width="350px"/>
  <br/>
  <br/>
  <img src="https://img.shields.io/npm/v/typof?label=version&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/l/typof?label=license&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/dt/typof?label=downloads&color=%2300927F"/>
  <img src="https://img.shields.io/npm/unpacked-size/typof?label=size&color=%2300927F"/>
</div>

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
  - [Tree](#tree)
  - [Import](#import)
  - [Methods](#methods)
  - [Types](#types)
- [Links](#links)
  - [Discord](https://discord.gg/keift)
  - [Telegram](https://t.me/keiftt)
  - [Twitter](https://x.com/keiftttt)
  - [GitHub](https://github.com/keift)
- [License](#license)

## About

Infer types.

## Features

- Infers multiple types
- Infers integer and float types
- Infers the type from a string
- There are simple type converters

## Installation

You can install it as follows.

```shell
// NPM
npm add typof

// PNPM
pnpm add typof

// Yarn
yarn add typof

// Bun
bun add typof

// Deno
deno add typof
```

## Documentation

### Tree

Briefly as follows.

```typescript
typof
│
├── typof(value)
├── string(value)
├── number(value)
├── integer(value)
├── boolean(value)
├── object(value)
├── array(value)
├── date(value)
├── _null(value)
├── _undefined(value)
│
└── type Types
```

### Import

Briefly as follows.

```typescript
import { typof } from 'typof';
```

### Methods

`typof(value)`

Infers types.

> | Parameter | Default | Description                         |
> | --------- | ------- | ----------------------------------- |
> | value     |         | Unknown<br/>Value to extract types. |
>
> returns [Types]\[]
>
> Example:
>
> ```typescript
> typof('test'); // [ "string" ]
>
> typof('0'); // [ "string", "number", "integer" ]
> typof(0); // [ "number", "integer" ]
>
> typof('0.5'); // [ "string", "number", "float" ]
> typof(0.5); // [ "number", "float" ]
>
> typof('true'); // [ "string", "boolean" ]
> typof(true); // [ "boolean" ]
>
> typof('{"key": "value"}'); // [ "string", "object" ]
> typof({ key: 'value' }); // [ "object" ]
>
> typof('["test"]'); // [ "string", "array" ]
> typof(['test']); // [ "array" ]
>
> typof('2025-01-01'); // [ "string", "date" ]
> typof(new Date('2025-01-01')); // [ "object", "date" ]
>
> typof('null'); // [ "string", "null" ]
> typof(null); // [ "null" ]
>
> typof('undefined'); // [ "string", "undefined" ]
> typof(undefined); // [ "undefined" ]
>
> // Tests are as follows. (Is this an integer?)
> if (typof(0).includes('integer')) console.log('This is an integer!');
> ```

<br/>

`string(value)`

Convert to string.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [String]
>
> Example:
>
> ```typescript
> string(0.5); // "0.5"
> string(true); // "true"
> string({ key: 'value' }); // '{"key":"value"}'
> string(['test']); // '["test"]'
> string(new Date('2025-01-01')); // "2025-01-01T00:00:00.000Z"
> string(null); // "null"
> string(undefined); // "undefined"
> ```

<br/>

`number(value)`

Convert to number.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [Number]
>
> Example:
>
> ```typescript
> number('0.5'); // 0.5
> ```

<br/>

`integer(value)`

Convert to integer.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [Number]
>
> Example:
>
> ```typescript
> integer('0.5'); // 0
> integer(0.5); // 0
> ```

<br/>

`boolean(value)`

Convert to boolean.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [Boolean] | Value
>
> Example:
>
> ```typescript
> boolean('true'); // true
> boolean(true); // true
> boolean('test'); // "test"
> ```

<br/>

`object(value)`

Convert to object.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [Object] | Value
>
> Example:
>
> ```typescript
> object('{"key":"value"}'); // { key: "value" }
> object('["test"]'); // '["test"]'
> ```

<br/>

`array(value)`

Convert to array.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [Array] | Value
>
> Example:
>
> ```typescript
> array('["test"]'); // [ "test" ]
> array('{"key":"value"}'); // '{"key":"value"}'
> ```

<br/>

`date(value)`

Convert to date.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [Array] | Value
>
> Example:
>
> ```typescript
> date('2025-01-01'); // 2025-01-01T00:00:00.000Z
> ```

<br/>

`_null(value)`

Convert to null.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [Null] | Value
>
> Example:
>
> ```typescript
> _null('null'); // null
> _null(null); // null
> _null('test'); // "test"
> ```

<br/>

`_undefined(value)`

Convert to undefined.

> | Parameter | Default | Description                   |
> | --------- | ------- | ----------------------------- |
> | value     |         | Unknown<br/>Value to convert. |
>
> returns [Undefined] | Value
>
> Example:
>
> ```typescript
> _undefined('undefined'); // undefined
> _undefined(undefined); // undefined
> _undefined('test'); // "test"
> ```

### Types

| Type    |
| ------- |
| [Types] |

## Links

- [Discord](https://discord.gg/keift)
- [Telegram](https://t.me/keiftt)
- [Twitter](https://x.com/keiftttt)
- [GitHub](https://github.com/keift)

## License

MIT License

Copyright (c) 2025 Keift

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
