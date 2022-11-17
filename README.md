# twig-wrap-handles

A plugin for the [Twig](https://github.com/twigjs/twig.js) template engine adapter of [Fractal](http://github.com/frctl/fractal) that wraps twig includes with a HTML comment that displays their handle.

[![NPM Version](https://img.shields.io/npm/v/twig-wrap-handles)](https://www.npmjs.com/package/twig-wrap-handles)

Requires Fractal v1.1.0 or greater.

# What is it for

This plugin wraps components and partials included via Twig `include` tag or Fractal `render` tag with a HTML comment that includes their handle.

logo.svg:

```twig logo.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456 456" xml:space="preserve"><circle cx="228" cy="228" r="228" fill="#54aedd"/><path fill="#f9f9f9" d="M129.9 119v200.3h200.3z"/><path fill="#f0f1f1" d="M129.9 319.3h200.3l-110-110-90.3 90.2z"/><path fill="#fff" d="M330.2 119v200.3H129.9z"/></svg>
```

twig component:

```twig
{% include '@logo' %}
```

rendered component:

```html
<!-- @icon-star -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456 456" xml:space="preserve"><circle cx="228" cy="228" r="228" fill="#54aedd" /><path fill="#f9f9f9" d="M129.9 119v200.3h200.3z" /><path fill="#f0f1f1" d="M129.9 319.3h200.3l-110-110-90.3 90.2z" /><path fill="#fff" d="M330.2 119v200.3H129.9z" /></svg>
<!-- /@icon-star -->
```

# How to install

To install this plugin run:

`npm install twig-wrap-handles`

then open your fractal.js file and add/modify the following lines:

```js
// Require the Twig adapter
const twigAdapter = require('@frctl/twig')();

// Require twig-wrap-handles plugin
const twigWrapHandles = require('twig-wrap-handles');

// configure Fractal to use the Twig template engine and obtain the engine instance
const instance = fractal.components.engine(twigAdapter);

// instance.twig refers to the twig.js instance
instance.twig.extend(twigWrapHandles);
```
