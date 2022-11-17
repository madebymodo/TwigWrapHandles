# twig-wrap-handles

A plugin for [Fractal](http://github.com/frctl/fractal) [Twig](https://github.com/twigjs/twig.js) template engine adapter that wraps twig includes with a HTML comment that displays their handle.

[![NPM Version](https://img.shields.io/npm/v/twig-wrap-handles)](https://www.npmjs.com/package/twig-wrap-handles)

Requires Fractal v1.1.0 or greater.

# What is it for

This plugin wraps components and partials included via Twig `include` tag or Fractal `render` tag with a HTML comment that includes their handle.

```twig
{% include '@icon-star' %}
```

```html
<!-- @icon-star -->
<>the @icon-star partial</>
<!-- /@icon-star -->
```

# How to install

To install this plugin run:

`npm install twig-wrap-handles`

then open your fractal.js file and add/modify following lines:

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
