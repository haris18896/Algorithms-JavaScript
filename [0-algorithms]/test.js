function getImmediateSubsets(arr) {
  const allSubsets = []
  for (let i = 0; i < arr.length; i++) {
    let subsets = []
    subsets.push([arr[i]])

    for (let j = i + 1; j < arr.length; j++) {
      subsets.push(subsets[j - (i + 1)].concat(arr[j]))
    }

    allSubsets.push(subsets)
  }

  return console.log('allSubsets : ', allSubsets)
}

getImmediateSubsets([1, 2, 3, 4, 5])
