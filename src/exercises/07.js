// 💰 run this with `node src/exercises/07.js`

// For all exercises, if an error occurs we want to `console.err(''whoops!')`
// Exercise 1: Get " 1 A B" by using callbacks with `addStringWithCallback()`
// Exercise 2: Get " 2 A B" by using promises with `addStringWithPromise()`
// Exercise 3: Get " 3 A B" by using async/await with `addStringWithPromise()`

function addStringCallback (previous, current, callback) {
  setTimeout(() => {
    if (Math.random() > 0.8) {
      callback(new Error('cb bang!'))
    } else {
      callback(null, previous + ' ' + current)
    }
  }, Math.floor(Math.random() * 100))
}

function addStringPromise (previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        reject(new Error('bang!'))
      }
      resolve(previous + ' ' + current)
    }, Math.floor(Math.random() * 100))
  })
}
