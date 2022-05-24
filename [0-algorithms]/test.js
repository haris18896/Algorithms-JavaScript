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
