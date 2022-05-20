function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b)
  const numberDivisors = max - min + 1
  // Largest possible value for SCM
  let upperBound = 1
  for (let i = min; i <= max; i++) {
    upperBound *= i
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple
    }
  }
}

smallestCommons([1, 5])

// *************************************************************************************
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b)
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min)
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr)
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every(value => multiple % value === 0)
    if (divisible) {
      return multiple
    }
  }
}

smallestCommons([1, 5])
// *************************************************************************************
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b)
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min)
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => (a * b) / gcd(a, b)
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr))
}

smallestCommons([1, 5])
// *************************************************************************************
// Find the SCM of a range of numbers
function smallestCommons(arr) {
  let primeFactors = {}
  const [min, max] = arr.sort((a, b) => a - b)
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFactors(i)
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i]
  }
  return multiple
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {}
  for (let prime = 2; prime <= num; prime++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while (num % prime === 0) {
      factors[prime] = factors[prime] ? factors[prime] + 1 : 1
      num /= prime
    }
  }
  return factors
}

smallestCommons([1, 5])
