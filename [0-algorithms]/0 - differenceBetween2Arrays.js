function largerArray(arr1, arr2) {
  let count = 0

  for (let i = 0; i < arr2.length; i++) {
    let isGreater = true
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] < arr1[j]) {
        isGreater = false
      }
    }
    if (isGreater) {
      count++
    }
  }
  console.log(count)
}

largerArray([23, 19, 36, 59, 45, 97], [103, 28, 65, 23, 405, 12])

// *************************************************************************************

function largerArray(arr1, arr2) {
  let count = 0
  for (let i = 0; i < arr2.length; i++) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.every(x => x < arr2[i])) {
        count++
      }
    }
    console.log(count)
  }
}
largerArray([23, 19, 36, 59, 45, 97], [103, 28, 65, 23, 405, 12])
