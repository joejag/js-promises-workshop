// 💰 run this with `node src/final/06.js`

// Exercise 1: Get " 1 A B" by using callbacks with `addStringWithCallback()`
// Exercise 2: Get " 2 A B" by using promises with `addStringWithPromise()`
// Exercise 3: Get " 3 A B" by using async/await with `addStringWithPromise()`

function addStringWithCallback (previous, current, callback) {
  setTimeout(() => {
    callback(null, previous + ' ' + current)
  }, Math.floor(Math.random() * 100))
}

function addStringWithPromise (previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previous + ' ' + current)
    }, Math.floor(Math.random() * 100))
  })
}

// 🏁
function goCallback (cb) {
  addStringWithCallback(' ', '1', (error, x) => {
    addStringWithCallback(x, 'A', (error, x) => {
      addStringWithCallback(x, 'B', (error, x) => {
        cb(null, x)
      })
    })
  })
}

function goPromise () {
  addStringWithPromise(' ', '2')
    .then(result => addStringWithPromise(result, 'A'))
    .then(result => addStringWithPromise(result, 'B'))
    .then(result => console.log(result))
}

async function goAsync () {
  let result = await addStringWithPromise(' ', '3')
  result = await addStringWithPromise(result, 'A')
  result = await addStringWithPromise(result, 'B')
  console.log(result)
}

goCallback((err, result) => {
  console.log(result)
})
goPromise()
goAsync()
