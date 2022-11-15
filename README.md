<div align="center">
  <a href="https://TiagoCavalcante.github.io/solid-colorful">
    <img src="demo/src/assets/design.png" width="229" height="233" alt="solid-colorful" />
  </a>
</div>

<div align="center">
  <a href="https://npmjs.org/package/@tiagotrindade/solid-colorful">
    <img alt="npm" src="https://img.shields.io/npm/v/@tiagotrindade/solid-colorful.svg?labelColor=da248d&color=6ead0a" />
  </a>
  <a href="https://github.com/TiagoCavalcante/solid-colorful/actions">
    <img alt="minziped-size" src="https://badgen.net/bundlephobia/minzip/@tiagotrindade/solid-colorful?labelColor=da248d&color=6ead0a" />
  </a>
  <a href="https://bundlephobia.com/result?p=@tiagotrindade/solid-colorful">
    <img alt="tree-shakeable" src="https://badgen.net/bundlephobia/tree-shaking/@tiagotrindade/solid-colorful?labelColor=da248d&color=6ead0a" />
  </a>
  <a href="https://npmjs.org/package/@tiagotrindade/solid-colorful">
    <img alt="types included" src="https://badgen.net/npm/types/@tiagotrindade/solid-colorful?labelColor=da248d&color=6ead0a" />
  </a>
</div>

<div align="center">
  <strong>solid-colorful</strong> is a tiny color picker component for SolidJS apps. (forked from <a href="https://github.com/omgovich/react-colorful">react-colorful</a>)
</div>

## Features

- 🗜 **Small**: Just 3.9 KB gzipped ([10x lighter](#why-solid-colorful) than **react-color**).
- 🌳 **Tree-shakeable**: Only the parts you use will be imported into your app's bundle.
- 🚀 **Fast**: Built with hooks and functional components only.
- 🛡 **Bulletproof**: Written in strict TypeScript.
- 🗂 **Typed**: Ships with [types included](#typescript-support)
- 😍 **Simple**: The interface is straightforward and easy to use.
- 👫 **Cross-browser**: Works out-of-the-box for most browsers, regardless of version.
- 📲 **Mobile-friendly**: Supports mobile devices and touch screens.
- 💬 **Accessible**: Follows the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) guidelines to support users of assistive technologies.
- 💨 **No dependencies**

## Live demos

- [Website](https://TiagoCavalcante.github.io/solid-colorful)
- [HEX Color Picker (CodeSandbox)](https://codesandbox.io/s/solid-colorful-demo-u5vwp)
- [RGBA Color Picker (CodeSandbox)](https://codesandbox.io/s/solid-colorful-rgb-o9q0t)

## Table of Contents

- [Getting Started](#getting-started)
- [Supported Color Models](#supported-color-models)
- [Customization](#customization)
- [How to paste or type a color?](#how-to-paste-or-type-a-color)
- [Code Recipes](#code-recipes)
- [TypeScript Support](#typescript-support)
- [Browser Support](#browser-support)
- [Why solid-colorful?](#why-solid-colorful)

## Getting Started

```
npm install solid-colorful
```

```js
import { HexColorPicker } from "@tiagotrindade/solid-colorful"

const YourComponent = () => {
  const [color, setColor] = createSignal("#aabbcc")
  return <HexColorPicker color={color()} onChange={setColor} />
}
```

## Supported Color Models

We provide 12 additional color picker components for different color models, unless your app needs a HEX string as an input/output format.

<details>
  <summary>How to use another color model</summary>

#### Available pickers

| Import                      | Value example                      |
| --------------------------- | ---------------------------------- |
| `{ HexColorPicker }`        | `"#ffffff"`                        |
| `{ RgbColorPicker }`        | `{ r: 255, g: 255, b: 255 }`       |
| `{ RgbaColorPicker }`       | `{ r: 255, g: 255, b: 255, a: 1 }` |
| `{ RgbStringColorPicker }`  | `"rgb(255, 255, 255)"`             |
| `{ RgbaStringColorPicker }` | `"rgba(255, 255, 255, 1)"`         |
| `{ HslColorPicker }`        | `{ h: 0, s: 0, l: 100 }`           |
| `{ HslaColorPicker }`       | `{ h: 0, s: 0, l: 100, a: 1 }`     |
| `{ HslStringColorPicker }`  | `"hsl(0, 0%, 100%)"`               |
| `{ HslaStringColorPicker }` | `"hsla(0, 0%, 100%, 1)"`           |
| `{ HsvColorPicker }`        | `{ h: 0, s: 0, v: 100 }`           |
| `{ HsvaColorPicker }`       | `{ h: 0, s: 0, v: 100, a: 1 }`     |
| `{ HsvStringColorPicker }`  | `"hsv(0, 0%, 100%)"`               |
| `{ HsvaStringColorPicker }` | `"hsva(0, 0%, 100%, 1)"`           |

#### Code example

```js
import { RgbColorPicker } from "@tiagotrindade/solid-colorful"

const YourComponent = () => {
  const [color, setColor] = createSignal({ r: 50, g: 100, b: 150 })
  return <RgbColorPicker color={color} onChange={setColor} />
}
```

[Live demo →](https://codesandbox.io/s/solid-colorful-rgb-o9q0t)

</details>

## Customization

The easiest way to tweak **solid-colorful** is to create another stylesheet to override the default styles.

```css
.your-component .solid-colorful {
  height: 240px;
}
.your-component .solid-colorful__saturation {
  border-radius: 4px 4px 0 0;
}
.your-component .solid-colorful__hue {
  height: 40px;
  border-radius: 0 0 4px 4px;
}
.your-component .solid-colorful__hue-pointer {
  width: 12px;
  height: inherit;
  border-radius: 0;
}
```

[See examples →](https://codesandbox.io/s/solid-colorful-customization-demo-mq85z?file=/src/styles.css)

## How to paste or type a color?

As you probably noticed the color picker itself does not include an input field, but do not worry if you need one. **solid-colorful** is a modular library that allows you to build any picker you need. Since `v2.1` we provide an additional component that works perfectly in pair with our color picker.

<details>
  <summary>How to use <code>HexColorInput</code></summary><br />

```js
import { HexColorPicker, HexColorInput } from "@tiagotrindade/solid-colorful"

const YourComponent = () => {
  const [color, setColor] = createSignal("#aabbcc")
  return (
    <div>
      <HexColorPicker color={color()} onChange={setColor} />
      <HexColorInput color={color()} onChange={setColor} />
    </div>
  )
}
```

[Live demo →](https://codesandbox.io/s/solid-colorful-hex-input-demo-0k2fx)

| Property   | Default | Description                                  |
| ---------- | ------- | -------------------------------------------- |
| `alpha`    | `false` | Allows `#rgba` and `#rrggbbaa` color formats |
| `prefixed` | `false` | Enables `#` prefix displaying                |

`HexColorInput` does not have any default styles, but it also accepts all properties that a regular `input` tag does (such as `class`, `placeholder` and `autoFocus`). That means you can place and modify this component as you like. Also, that allows you to combine the color picker and input in different ways:

```jsx
<HexColorInput color={color} onChange={setColor} placeholder="Type a color" prefixed alpha />
```

</details>

## Code Recipes

- [Value debouncing](https://codesandbox.io/s/dgqn0?file=/src/DebouncedPicker.js)
- [Popover picker](https://codesandbox.io/s/opmco?file=/src/PopoverPicker.js)
- [Preset colors (color squares)](https://codesandbox.io/s/bekry?file=/src/SwatchesPicker.js)
- [Picker that accepts any color input](https://codesandbox.io/s/6fp23?file=/src/CustomPicker.js)
- [Text field to be able to type/copy/paste a color](https://codesandbox.io/s/0k2fx?file=/src/App.js)
- [Custom styles and layout](https://codesandbox.io/s/mq85z?file=/src/styles.css)

## TypeScript Support

**solid-colorful** supports TypeScript and ships with types in the library itself; no need for any other install.

<details>
  <summary>How you can get the most from our TypeScript support</summary><br />

While not only typing its own functions and variables, it can also help you type yours. Depending on the component you are using, you can also import the type that is associated with the component. For example, if you are using our HSL color picker component, you can also import the `HSL` type.

```ts
import { HslColorPicker, HslColor } from "@tiagotrindade/solid-colorful";

const myHslValue: HslColor = { h: 0, s: 0, l: 0 };
```

Take a look at [Supported Color Models](#supported-color-models) for more information about the types and color formats you may want to use.

</details>

## Browser Support

It would be an easier task to list all of the browsers and versions that **solid-colorful** does not support! We regularly test against browser versions going all the way back to 2013 and this includes IE11.

**solid-colorful** works out-of-the-box for most browsers, regardless of version, and only requires an `Object.assign` polyfill be provided for full IE11 support.

## Why solid-colorful?

Today each dependency drags more dependencies and increases your project’s bundle size uncontrollably. But size is very important for everything that intends to work in a browser.

**solid-colorful** is a simple color picker for those who care about their bundle size and client-side performance. It is fast and lightweight because:

- has no dependencies (no risks in terms of vulnerabilities, no unexpected bundle size changes);
- built with hooks and functional components only (no classes and polyfills for them);
- ships only a minimal amount of manually optimized color conversion algorithms (while most of the popular pickers import entire color manipulation libraries that increase the bundle size by more than 10 KB and make your app slower).

To show you the problem that **solid-colorful** is trying to solve, we have performed a simple benchmark (using [bundlephobia.com](https://bundlephobia.com)) against popular React color picker libraries:

| Name               | Bundle size                                                                                                                        | Bundle size (gzip)                                                                                                                    | Dependencies                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **solid-colorful** | [![](https://badgen.net/bundlephobia/min/@tiagotrindade/solid-colorful?color=6ead0a&label=)](https://bundlephobia.com/result?p=@tiagotrindade/solid-colorful)    | [![](https://badgen.net/bundlephobia/minzip/@tiagotrindade/solid-colorful?color=6ead0a&label=)](https://bundlephobia.com/result?p=@tiagotrindade/solid-colorful)    | [![](https://badgen.net/bundlephobia/dependency-count/@tiagotrindade/solid-colorful?color=6ead0a&label=)](https://bundlephobia.com/result?p=@tiagotrindade/solid-colorful)    |
| react-color        | [![](https://badgen.net/bundlephobia/min/react-color?color=red&label=)](https://bundlephobia.com/result?p=solid-color)             | [![](https://badgen.net/bundlephobia/minzip/react-color?color=red&label=)](https://bundlephobia.com/result?p=solid-color)             | [![](https://badgen.net/bundlephobia/dependency-count/react-color?color=red&label=)](https://bundlephobia.com/result?p=solid-color)             |
| react-input-color  | [![](https://badgen.net/bundlephobia/min/react-input-color?color=red&label=)](https://bundlephobia.com/result?p=react-input-color) | [![](https://badgen.net/bundlephobia/minzip/react-input-color?color=red&label=)](https://bundlephobia.com/result?p=react-input-color) | [![](https://badgen.net/bundlephobia/dependency-count/react-input-color?color=red&label=)](https://bundlephobia.com/result?p=react-input-color) |
| rc-color-picker    | [![](https://badgen.net/bundlephobia/min/rc-color-picker?color=red&label=)](https://bundlephobia.com/result?p=rc-color-picker)     | [![](https://badgen.net/bundlephobia/minzip/rc-color-picker?color=red&label=)](https://bundlephobia.com/result?p=rc-color-picker)     | [![](https://badgen.net/bundlephobia/dependency-count/rc-color-picker?color=red&label=)](https://bundlephobia.com/result?p=rc-color-picker)     |
