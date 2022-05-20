function destroyer(arr) {
  let value = Object.values(arguments).slice(1)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (arr[i] === value[j]) {
        delete arr[i]
      }
    }
  }

  return arr.filter(item => item !== null)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

// *************************************************************************************
function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1)
  return arr.filter(function (val) {
    return !valsToRemove.includes(val)
  })
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

// *************************************************************************************

function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

// *************************************************************************************
