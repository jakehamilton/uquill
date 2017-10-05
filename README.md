# uQuill

A functional utility library

----

### Why does this exist?

I'm trying to learn the in's and out's of functional programming, so I'm  
creating this library in an attempt to better understand the fundamentals.

### Is this compatible with the [Fantasy Land spec](https://github.com/fantasyland/fantasy-land)?

At this time, no. Plans are to fall in line with the specification once  
I've understood how the internals work.

### How do I use this?

The project is written using the es2015 module system. Currently, the best  
approach is to use `@std/esm` in node:

##### index.js
```js
require('@std/esm')(module)('./app.mjs')
```

##### app.mjs
```js
// default import
import uquill from 'uquill'

// named imports
import {
    compose,

    Either,
    Left,
    Right,

    Task
} from 'uquill'
``

```shell
npm i -S uquill @std/esm

node index.js
```
