function prime() {
  let prime = []
  for (let num = 2; num <= 150; num++) {
    let i = 2
    while (i <= num / 2) {
      if (num % i === 0) {
        break
      }
      i++
    }
    if (i > num / 2) {
      prime.push(num)
    }
  }
  console.log(prime)
}

prime()
