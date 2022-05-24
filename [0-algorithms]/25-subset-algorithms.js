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
