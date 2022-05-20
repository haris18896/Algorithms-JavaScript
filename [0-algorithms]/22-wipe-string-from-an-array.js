const wipe = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      arr[i] = arr[i - 1] + 1
    }
    // if( typeof arr[i] === 'number') {
    //   newArr.push(arr[i])
    // }
  }

  return newArr

  // return arr.filter(item => typeof item === 'number')
}

console.log(wipe([1, 15, 'abc', 't', 19, 31, 'ca']))
