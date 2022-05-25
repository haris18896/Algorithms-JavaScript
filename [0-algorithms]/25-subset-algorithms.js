// get all subsets
function getAllSubsets(theArray) {
  const subsets = theArray.reduce((subsets, value) => subsets.concat(subsets.map(set => [value, ...set])), [[]])
  return subsets
}

console.log(getAllSubsets([1, 2, 3]))

// *************************************************************************************
function getAllSubsets(arr) {
  if (!Array.isArray(arr)) {
    return
  }

  let n = arr.length
  let allSubsets = []
  for (let i = 0; i < Math.pow(2, n); i++) {
    let subset = []
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subset.push(arr[j])
      }
    }

    allSubsets.push(subset)
  }
  console.log(allSubsets)
}

getAllSubsets([1, 2, 3, 4, 5, 6])
// *************************************************************************************
function getAllSubsets(arr) {
  if (!Array.isArray(arr)) {
    return
  }
  const subsets = arr.reduce((prevValue, currentValue) => prevValue.concat(prevValue.map(set => set.concat(currentValue))), [[]])

  return subsets
}

console.log(getAllSubsets([1, 2, 3, 4]))
// *************************************************************************************

function getAllSubsets(array) {
  const subsets = [[]]

  for (const el of array) {
    const last = subsets.length - 1
    for (let i = 0; i <= last; i++) {
      // subsets.push(subsets[i].concat(ele))
      subsets.push([...subsets[i], el])
    }
  }

  return subsets
}

// getImmediateSubsets([1, 2, 3, 4])
console.log(getAllSubsets([1, 2, 3, 4]))

// *************************************************************************************

function getImmediateSubsets(arr) {
  const allSubsets = []

  for (let i = 0; i < arr.length; i++) {
    let subsets = []

    for (let j = i; j < arr.length; j++) {
      if (j !== i) {
        subsets.push([...subsets[j - (i + 1)], arr[j]])
      } else {
        subsets.push([arr[j]])
      }
    }
    allSubsets.push(subsets)
  }

  return allSubsets
}

// getImmediateSubsets([1, 2, 3, 4, 5])
console.log(getImmediateSubsets([1, 2, 3, 4, 5]))
// *************************************************************************************
function getImmediateSubsets(arr) {
  const allSubsets = []
  for (let i = 0; i < arr.length; i++) {
    let subsets = []
    subsets.push([arr[i]])

    for (let j = i + 1; j < arr.length; j++) {
      // subsets.push([...subsets[j - (i + 1)], arr[j]])
      subsets.push(subsets[j - (i + 1)].concat(arr[j]))
    }

    allSubsets.push(subsets)
  }

  return allSubsets
}

// getImmediateSubsets([1, 2, 3, 4, 5])
console.log(getImmediateSubsets([1, 2, 3, 4, 5]))

// *************************************************************************************
function getImmediateSubsets(arr, num) {
  const allSubsets = []
  for (let i = 0; i <= arr.length - num; i++) {
    let subsets = []
    subsets.push([arr[i]])

    for (let j = i + 1; j <= arr.length - num; j++) {
      subsets.push(subsets[j - (i + 1)].concat(arr[j]))
    }

    allSubsets.push(subsets)
  }

  return console.log('allSubsets : ', allSubsets)
}

getImmediateSubsets([1, 2, 3, 4, 5], 1)
// *************************************************************************************
function getImmediateSubsets(arr) {
  const allSubsets = []
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1
    let subsets = []
    subsets.push([arr[i]])

    while (j < arr.length) {
      subsets.push(subsets[j - (i + 1)].concat(arr[j]))
      j++
    }

    allSubsets.push(subsets)
  }

  return console.log('allSubsets : ', allSubsets)
}

getImmediateSubsets([1, 2, 3, 4, 5])
// *************************************************************************************
function getImmediateSubsets(arr) {
  const allSubsets = []
  for (let i = 0; i < arr.length; i++) {
    let subsets = []
    subsets.push([arr[i]])
    for (let j = i; j < arr.length; j++) {
      if (j != i) {
        subsets.push(subsets[j - (i + 1)].concat(arr[j]))
        for (let k = 0; k < subsets.length; k++) {
          let sum = subsets[k].reduce((a, b) => a + b, 0)
          if (sum > 5) {
            allSubsets.push(subsets[k])
          }
        }
      }
    }
  }

  return console.log('allSubsets : ', [...new Set(allSubsets)])
}

getImmediateSubsets([1, 2, 3, 4, 5])

// *************************************************************************************
