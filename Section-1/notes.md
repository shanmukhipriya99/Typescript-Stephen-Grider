Typescript = JavaScript + A type system

The TS Type System:
 - help us catch errors during development
 - uses 'type annotations' to analyze our code
 - only active during development
 - doesn't provide any performance optimization

Typescript code (JS code with type annotations) =>
Typescript Compiler =>
Plain old JS

The browser would have no clue about the usage of typescript.

One time installation:
`npm i -g typescript ts-node`

`tsc --help`: tsc=>typescript compiler

`tsc index.ts` => returns a JS file, index.js, which can then be run by: `node index.js`

To combine the above into a single step: `ts-node index.ts`