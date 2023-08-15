## Type Annotations & Type Inference

#### Type Annotations

Code we add to tell Typescript what type of value a variable will refer to.
- developers tell Typescript the type.


#### Type Inference

Typescript tries to figure out what type of value a variable refers to.
- Typescript tries to guess the type.

As long as the variable declaration and initialization are on the same line, typescript will figure out the type of the value (*Type Inference*).

Best to use type inference in most scenarios.

We can use type annotations in the following cases:
- When we declare a variable on one line and initialize it later.
- When a function returns the 'any' type and we need to clarify the value.
- When we want a variable to have a type that can't be inferred.
Ex: `let numAboveZero: boolean | number = false;` This can later be assigned with a number too.

