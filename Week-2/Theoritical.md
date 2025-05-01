### Explain the difference between primitive types and reference types in JavaScript.
* Primitive data types
  - Stored in stack memory.
  - String, Number, Boolean, Null, Undefined, Symbol, and BigInt are primitive data types.
  - Primitive data types have fixed sizes. So, the runtime can allocate a fixed amount of memory and store them in the stack.

* Reference data types
  - Stored in heap memory.
  - Objects, arrays, dates, etc. are reference data types in JavaScript.
  - Unlike primitive data types, reference data types don't have fixed sizes. So, the runtime can't allocate a fixed memory and store them in the heap.

### Compare the two methods of creating a new function in JavaScript: Function Declaration and Function Expression. Discuss the differences between them in terms of hoisting and provide examples for each.
* Function Declaration
  - Syntax: function fun_name(paramOne, paramTwo) { // statements}
  - Function declarations are hoisted.
  - A function declaration must have a function name.
  - Function declaration does not require a variable assignment.
 
* Function Expression
  - Syntax: var fun_name = function(paramOne, paramTwo) { // statements}
  - Function declarations are not hoisted.
  - A function expression is similar to a function declaration without the function name.
  - Function expressions can be stored in a variable assignment.
 
### Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?
- Deterministic Output: For a given set of inputs, the output is always the same.
- No Side Effects: The function does not:
  - Modify variables outside its scope.
  - Interact with external systems like APIs, databases, or DOM manipulation.
  - Change mutable data.
- Immutability: Pure functions do not change the input values; instead, they return a new value or object.

### Write down the array methods that you have studied and classify them to destructive and not destructive.
1. Non-Destructive
- .forEach()
- .map()
- .filter()
- .reduce()
- .slice()
- .concat()
- .includes()
- .join()
- .indexOf()
- .lastIndexOf()
- .every()
- .some()
- .find()
- .findIndex()
- .Array.from()
- Array.isArray()
- .flat()

2. Destructive
- .splice()
- .sort()
- .fill()
- .reverse()
- .push()
- .pop()
- .unshift()
- .shift()
