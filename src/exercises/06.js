// 💰 run this with `node src/exercises/06.js`

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
