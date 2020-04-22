// 💰 run this with `node src/final/02.js`

// Exercise 1
// Create a function that calls `printString()` with 'A', 'B' then 'C'.
// Does the output go in alphabetical order?

function printString (string) {
  setTimeout(() => {
    console.log(string)
  }, Math.floor(Math.random() * 100))
}

// 🏁
function callPrintString () {
  printString('A')
  printString('B')
  printString('C')
}
callPrintString()
