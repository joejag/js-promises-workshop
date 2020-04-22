// 💰 run this with `node src/final/07.js`

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

// 🏁
function goCallback (cb) {
  addStringCallback(' ', '1', (error, x) => {
    if (error) {
      cb('whoops!')
    } else {
      addStringCallback(x, 'A', (error, x) => {
        if (error) {
          cb('whoops!')
        } else {
          addStringCallback(x, 'B', (error, x) => {
            if (error) {
              cb('whoops!')
            } else {
              cb(null, x)
            }
          })
        }
      })
    }
  })
}

function goPromise () {
  addStringPromise(' ', '2')
    .then(result => addStringPromise(result, 'A'))
    .then(result => addStringPromise(result, 'B'))
    .then(result => console.log(result))
    .catch(result => console.log('whoops!'))
}

async function goAsync () {
  try {
    let result = await addStringPromise(' ', '3')
    result = await addStringPromise(result, 'A')
    result = await addStringPromise(result, 'B')
    console.log(result)
  } catch {
    console.log('whoops!')
  }
}

goCallback((err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})
goPromise()
goAsync()
