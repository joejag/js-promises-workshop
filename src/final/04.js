// 💰 run this with `node src/final/04.js`

// Exercise 1
// Given this new version of `printString` use `.then()` promise chain to call printString with 'A', 'B', and 'C' in order

function printString (string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string)
      resolve()
    }, Math.floor(Math.random() * 100))
  })
}

// 🏁
printString('A')
  .then(() => printString('B'))
  .then(() => printString('C'))
