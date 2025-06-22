# Advanced-JavaScript

## Callbacks
   In JavaScript, a callback is a function that is passed as an argument to another function and is invoked or executed inside that function at a later point in time. Callbacks are a way to achieve asynchronous behavior in JavaScript, allowing functions to be executed after certain actions or events occur.

# In JavaScript, there are mainly three types of callbacks:
- Synchronous Callbacks:
  Synchronous callbacks are executed immediately after a synchronous function call finishes. In other words, they are executed in the same stack as the function that     calls them. Synchronous callbacks are commonly used in scenarios like array methods (forEach, map, filter, etc.), where the callback is invoked synchronously for      each element of the array.
- Asynchronous Callbacks:
   Asynchronous callbacks are executed after an asynchronous operation completes. This could be after a timer expires, an AJAX request completes, or an event occurs.     Asynchronous callbacks are commonly used in scenarios like handling responses from asynchronous operations such as AJAX requests or setTimeout functions.