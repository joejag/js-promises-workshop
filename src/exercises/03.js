// 💰 run this with `node src/exercises/03.js`

// Exercise 1
// Using a callback, call `printStringWithCallback()` and make the output print in order of A, B, C.

function printStringWithCallback (string, callback) {
  setTimeout(() => {
    console.log(string)
    callback()
  }, Math.floor(Math.random() * 100))
}
