// 💰 run this with `node src/final/03.js`

// Exercise 1
// Using a callback, call `printStringWithCallback()` and make the output print in order of first, second, third.

function printStringWithCallback (string, callback) {
  setTimeout(() => {
    console.log(string)
    callback()
  }, Math.floor(Math.random() * 100))
}

// 🏁
printStringWithCallback('first', () => {
  printStringWithCallback('second', () => {
    printStringWithCallback('third', () => {})
  })
})
