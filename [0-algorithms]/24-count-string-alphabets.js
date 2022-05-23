function StringLiteral(str) {
  let count = {}

  for (let i = 0; i < str.length; i++) {
    let x = str[i]
    if (x != ' ') {
      count[x] ? count[x]++ : (count[x] = 1)
    }
  }
  console.log(count)
}

StringLiteral('This is a hello world app')

// *************************************************************************************

function StringLiteral(str) {
  let count = {}
  str.split('').forEach(i => {
    if (i != ' ') {
      count[i] ? count[i]++ : (count[i] = 1)
    }
  })
  console.log(count)
}

StringLiteral('This is a hello world app')

// *************************************************************************************

function StringLiteral(str) {
  let newStr = str.split(' ').join('')
  console.log('newString : ', newStr)
  var count = {}
  newStr.split('').forEach(ele => {
    count[ele] ? count[ele]++ : (count[ele] = 1)
  })
  console.log(count)
}

StringLiteral('This is a hello world app')

// *************************************************************************************

function StringLiteral(str) {
  let count = { e: 0, k: 0 }

  str.split(' ').forEach(i => {
    if (i.includes('e')) {
      count.e++
    } else if (i.includes('k')) {
      count.k++
    }
  })
  console.log(count)
}

StringLiteral('This is a hello world app which is known as the knight')

// *************************************************************************************
function StringLiteral(str) {
  let count = 0

  str.split(' ').forEach(i => {
    if (['e', 'k'].includes(i)) {
      count++
      console.log(i)
    }
  })
  console.log(count)
}

StringLiteral('This is a hello world app which is known as the knight')

// *************************************************************************************

function StringLiteral(str) {
  let count = 0

  str.split(' ').forEach(i => {
    if (i.includes('e') || i.includes('k')) {
      count++
    }
  })
  return count
}

StringLiteral('This is a hello world app which is known as the knight')

// *************************************************************************************
