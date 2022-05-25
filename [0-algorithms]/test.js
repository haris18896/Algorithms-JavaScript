function getImmediateSubsets(arr, num) {
  const allSubsets = []
  for (let i = 0; i < arr.length; i++) {
    let subsets = []
    let sum = 0
    subsets.push([arr[i]])
    for (let j = i; j < arr.length; j++) {
      if (j != i) {
        subsets.push(subsets[j - (i + 1)].concat(arr[j]))
      }
      sum = subsets[j - i].reduce((a, b) => a + b, 0)
      if (sum < num) {
        allSubsets.push(subsets[j - i])
      }
    }
  }

  return console.log('allSubsets : ', [...new Set(allSubsets)])
}

getImmediateSubsets([1, 2, 3, 4, 5], 5)
