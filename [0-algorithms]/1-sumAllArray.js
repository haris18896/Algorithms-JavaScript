function sumAll(arr) {
  const max = Math.max(arr[0], arr[1])
  const min = Math.min(arr[0], arr[1])
  let sumBetween = 0
  for (let i = min; i <= max; i++) {
    sumBetween += i
  }
  return sumBetween
}

sumAll([1, 4])

// *************************************************************************************

function sumAll(arr) {
  const startNum = arr[0]
  const endNum = arr[1]
  const numCount = Math.abs(startNum - endNum) + 1
  const sum = ((startNum + endNum) * numCount) / 2
  return sum
}

sumAll([1, 4])

// *************************************************************************************

function sumAll(arr) {
  let sumBetween = 0
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i
  }
  return sumBetween
}

sumAll([1, 4])

// *************************************************************************************

function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b)
  return first !== last ? first + sumAll([first + 1, last]) : first
}

sumAll([1, 4])
