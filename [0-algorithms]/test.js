function getImmediateSubsets(arr) {
  const subsets = [[]]

  for (let ele of arr) {
    const last = subsets.length - 1
    for (let i = 0; i <= last; i++) {
      subsets.push(subsets[i].concat(ele))
    }
  }

  return subsets
}

// getImmediateSubsets([1, 2, 3, 4])
console.log(getImmediateSubsets([1, 2, 'h1', 4]))
