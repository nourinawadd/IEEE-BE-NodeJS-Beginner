### Compare between the three types of quantifiers in regular expressions (`?`, `+`, `*`).
- `?` : for zero-or-one characters, used for optional space matching.
- `+` : for one-or-more characters, used for unlimited spaces, with a minimum of one.
- `*` : for zero-or-more characters, like `+` but can be left empty.

### What are the characters that can be represented by `\w` and `\b` in a regular expression?
- `\w` : matches any word characters (a-z, A-Z, 0-9, and _'s)
- `\b` : indicates that a pattern is bounded by a non-word character (all characters apart from numbers, letters, and underscore)

### Compare between the `Map` and `WeakMap` according to the way they save keys and values.
* Map:
  - Allows any data type as keys.
  - Remain in memory as long as the Map object itself is referenced.
  - Suitable for general-purpose key-value storage where you want to maintain references to both keys and values.

* WeakMap:
  - Only allows objects as keys.
  - Garbage collector can remove them from memory even if the WeakMap itself still exists, as long as there are no other references to those objects
  - Suitable for caching data based on objects w/o preventing garbage collection of the objects themselves.

### Write an example of a string which matches the following pattern:
```js
const regex = /^(0[1-9]|[12]\d|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;
```
-> 13/01/2006

### Write another string that violates the following pattern:
```js
const regex = /^(?!.*\bieee\b).+$/i;
```
-> ieee
