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
