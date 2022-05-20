function sumFibs(num) {
  let prevNumber = 0
  let currNumber = 1
  let result = 0
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber
    }
    currNumber += prevNumber
    prevNumber = currNumber - prevNumber
  }

  return result
}

// test here
sumFibs(4)
// *************************************************************************************

function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0

  // Create an array of fib numbers till num
  const arrFib = [1, 1]
  let nextFib = 0

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib)
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b)
}

// test here
sumFibs(4)
