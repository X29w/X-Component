# X-Component

[![NPM version](https://img.shields.io/npm/v/X-Component.svg?style=flat)](https://npmjs.org/package/X-Component)
[![NPM downloads](http://img.shields.io/npm/dm/X-Component.svg?style=flat)](https://npmjs.org/package/X-Component)

A React Component Library

Some components are available for use in your React projects.To help you more easily build your React applications.

## Installation

To install the X-Component library, you can use npm or yarn.

```
npm install x-component
```

```
yarn add x-component
```

## Usage

To use the X-Component library in your React project, you can import the components you need and use them in your code.

```jsx
import { ConditionalRender } from 'X-Component';

export default () => (
  <ConditionalRender condition={true} children={<div>Hello</div>} />
);
```

## Documentation

`current`

- `ConditionalRender` - A component that renders its children only if a condition is true.
- `DetectEmpty` - A component that detects if an array or object is empty and renders a message accordingly.
- `MapRender` - A component that maps an array and renders the result.
- `RenderList` - A component that renders a list of items.
