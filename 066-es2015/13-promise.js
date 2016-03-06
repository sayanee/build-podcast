function egFunc(param) {
  return new Promise(function (resolve, reject) {
    if (param > 2) {
      resolve(param * 2);
    }

    if (param <= 2) {
      reject(param / 2);
    }
  })
}

egFunc(4)
.then(value => {
  console.log('Success! ' + value)
})
.catch(error => {
  console.log('Error: ' + error)
})

// delay function

function delayFunc(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay)
  })
}

delayFunc(4000).then(() => {
  console.log('Success!')
})
