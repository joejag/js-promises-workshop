// 💰 run this with `node src/final/05.js`

// Exercise 1
// Create a function that uses `async` and `await` to call printString with 'A', 'B', and 'C' in order
// Note: You shouldn't have to edit `printString` to do this.

function printString (string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string)
      resolve()
    }, Math.floor(Math.random() * 100))
  })
}

// 🏁
async function goAsync () {
  await printString('A')
  await printString('B')
  await printString('C')
}

goAsync()
