### 1. Explain the difference between `==` and `===` in JavaScript.
- `==` is used for loose comparison (different variable types *can still* be equal)
- `===` is used for strict comparison (different variable types *cannot* be equal)

### 2. Hamed is simply trying to sort an array of numbers but unfortunately this sort method isn't working as expected. Can you tell Hamed the reason for this behavior and how to implement it in a right way?
```js
const arr = [10, 5, 11];
arr.sort();
```
- The sort() array sorts values as strings.
- To fix this, we need to use the compare() function:
    ```js
    arr.sort(function(a, b){return a - b});
    ```
