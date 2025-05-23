# jsdoc-vuejs-sfc

A JSDoc plugin to document vuejs sfc files with `<script setup>` style.

## General Description

The plugin implements a `beforeParse()` event handler. Its only task is to extract the contents of the `<script setup>` part of the single file component (sfc) and pass it for further processing to the [JSDoc](https://jsdoc.app) process. This is done by relying on the [complier-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc) shipped with the vue ecosystem.

This code is actually based on a vastly simplified copy of the [jsdoc-vuejs](https://github.com/Kocal/jsdoc-vuejs#readme) package.

## Installation

Simply install with e.g. npm:

`npm install jsdoc-vuejs-sfc`

## Configuration

Include in your `jsdoc.conf` a reference to the plugin:

`"plugins": ["node_modules/jsdoc-vuejs-sfc"]`

## Usage

This module quite unintelligently checks, if a .vue file has a `<script setup` section and passes that for further processing to the JSDoc process. Within the `script setup>` section now functions, variables and other JSDoc elements can be commented as usual.

## Examples

See test folder of the package for some example usages.

## License

This package is provided under the [GPL version 3 license](LICENSE.md).

## Version History

0.0.1: Initial version published.

0.0.2: Added some basic documentation.